import React, { useState, useCallback, useContext } from "react";
import { View, Text, TouchableOpacity, Image, Alert, TextInput, ScrollView, Platform, ActivityIndicator } from "react-native";
import { Divider, Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { ImageContext } from "../../contexts/ImageContext";

const BottomSheet = React.memo(({ refRBSheet }) => {
  const { uploadData, setUploadData } = useContext(ImageContext)
  const { addUpload } = useContext(ImageContext)
  const [imageUri, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = useCallback((text) => setName(text), []);
  const handleNoteChange = useCallback((text) => setNote(text), []);

  const currentDate = () => {
    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let usable = new Date();
    let h = usable.getHours();
    let m = usable.getMinutes();
    if (m < 10) {
      m = `0${m}`;
    };
    let day = usable.getDay();
    let date = usable.getDate();
    let month = usable.getMonth() + 1;
    let year = usable.getFullYear();
    let returnable = week[day] + ", " + date + " " + monthShort[usable.getMonth()] + " " + year + "  " + h + ":" + m;  // Sun, 26 May 2023 9:00
    // let returnable = `${date} ${monthShort[usable.getMonth()]} ${year}`;
    return returnable
  }

  const createId = () => {
    const id = Date.now().toString();
    const year = new Date().getFullYear();
    return Number(`${year}${id}`);
  };

  const handleCameraLaunch = async () => {
    const permission = await request(
      Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
    );

    if (permission !== RESULTS.GRANTED) {
      Alert.alert("Permission Denied", "Camera access is required to take photos.");
      return;
    }

    launchCamera({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && response.assets?.[0]?.uri) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && response.assets?.[0]?.uri) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const closeSheet = () => {
    refRBSheet.current?.close();
    setSelectedImage(null);
    setName("");
    setNote("");
    setLoading(false)
  };

  const submit = () => {
    if (imageUri) {
      setUploadData([...uploadData, {
        id: createId(),
        date: currentDate(),
        img: imageUri,
        description: note,
        owner: "planter_the_plant",
        name: name
      }])
      closeSheet()
    } else if (!imageUri) {
      alert('Please select/click a plant to seed in Plant Gallery.')
    }

  }

  return (
    <RBSheet
      ref={refRBSheet}
      height={700}
      openDuration={500}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
        draggableIcon: { backgroundColor: "#000" },
        container: { padding: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15 },
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Upload Image</Text>
        <View keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} style={{ paddingVertical: 20 }}>
          {!imageUri ? (
            <View>
              <TouchableOpacity onPress={openImagePicker} style={styles.option}>
                <Icon type="feather" size={25} name="folder" />
                <Text style={styles.optionText}>Open Gallery</Text>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity onPress={handleCameraLaunch} style={styles.option}>
                <Icon type="feather" size={25} name="camera" />
                <Text style={styles.optionText}>Open Camera</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Image style={styles.image} source={{ uri: imageUri }} />
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name your plant and let it flourish:</Text>
                <TextInput value={name} onChangeText={handleNameChange} style={styles.textInput} placeholder="Sunflower..." />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Share a little story or note about the plant:</Text>
                <TextInput value={note} onChangeText={handleNoteChange} style={styles.textInput} placeholder="The name 'sunflower' comes from the flower’s resemblance to the sun...." multiline />
              </View>
              <TouchableOpacity onPress={() => { setLoading(true), setTimeout(() => { submit() }, 0) }} style={styles.plantButton}>
                {
                  loading ? (<ActivityIndicator size={20} color="white" style={styles.plantButtonText} />) : (<Text style={styles.plantButtonText}>Plant It</Text>)
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={closeSheet} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </RBSheet>
  );
});

const styles = {
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Omnes Black",
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    gap: 10,
  },
  optionText: {
    fontFamily: "Omnes SemiBold",
  },
  image: {
    height: 400,
    width: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 15,
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontFamily: "Omnes SemiBold",
  },
  textInput: {
    fontFamily: "Omnes Medium",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  plantButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "black",
    marginVertical: 15,
  },
  plantButtonText: {
    fontFamily: "Omnes SemiBold",
    fontSize: 20,
    color: "white",
    paddingVertical: 15,
  },
  cancelButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  cancelButtonText: {
    fontFamily: "Omnes SemiBold",
    fontSize: 14,
    paddingVertical: 15,
  },
};

export default BottomSheet;
