import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    Modal,
    TextInput
} from "react-native";
import BackHeader from "../../components/BackHeader";
import { useNavigation } from "@react-navigation/native";

export default function AccountImageCardScreen({ route }) {
    const navigation = useNavigation();
    const { id, name, date, note, img, owner } = route.params;

    const [currentName, setCurrentName] = useState(name);
    const [currentNote, setCurrentNote] = useState(note);

    const [modalVisible, setModalVisible] = useState(false);
    const [plantName, setPlantName] = useState("");
    const [plantNote, setPlantNote] = useState("");

    const submit = () => {
        plantName !== "" ? setCurrentName(plantName) : null;
        plantNote !== "" ? setCurrentNote(plantNote) : null;
        setModalVisible(false)
        setPlantName("")
        setPlantNote("")
    }

    return (
        <View style={styles.container}>
            <BackHeader
                fontSize={20}
                callback={() => navigation.goBack()}
            />
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <View style={styles.head}>
                    <View style={styles.headInfo}>
                        <Image
                            style={styles.pro_img}
                            source={{ uri: img }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text style={styles.pro_text}>{owner}</Text>
                    </View>

                    <View style={styles.headOption}>
                        <TouchableOpacity onPress={() => { setModalVisible(true) }} style={{ borderWidth: 1, borderRadius: 5, paddingVertical: 1, paddingHorizontal: 30 }}>
                            <Text style={{ fontFamily: "Omnes Medium" }}>Edit</Text>
                        </TouchableOpacity>

                        <Modal
                            animationType="slide"
                            backdropColor="rgba(0, 0, 0, 0.37)"
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalTitle}>Edit Plant</Text>
                                    <View style={styles.modalName}>
                                        <Text style={styles.modalNameText}>New plant name:</Text>
                                        <TextInput value={plantName} onChangeText={e => setPlantName(e)} style={styles.modalNameInput} placeholder='Water Lilies...'></TextInput>
                                    </View>
                                    <View style={styles.modalNote}>
                                        <Text style={styles.modalNoteText}>New plant description:</Text>
                                        <TextInput value={plantNote} onChangeText={e => setPlantNote(e)} style={styles.modalNoteInput} placeholder='Frogs, dragonflies and other flying insects use lily pads as resting places...'></TextInput>
                                    </View>

                                    <View style={styles.modalBtn}>
                                        <TouchableOpacity onPress={() => { submit() }} style={styles.modalUpdate}>
                                            <Text style={styles.modalUpdateBtn}>Update</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setModalVisible(false) }} style={styles.modalCancel}>
                                            <Text style={styles.modalCancelBtn}>cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </ScrollView>
                        </Modal>
                    </View>
                </View>

                <View style={styles.img_container}>
                    <Image
                        style={styles.img_container_img}
                        source={{ uri: img }}
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.info_user}>
                        {currentName} {currentNote ? <Text style={styles.info_description}>{currentNote}</Text> : null}
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={styles.date_text}>{date}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "white",
        paddingVertical: 15,
    },
    headInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    headOption: {
        justifyContent: "center",
        alignItems: "center",
    },
    pro_img: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    pro_text: {
        fontFamily: "Omnes SemiBold",
    },
    img_container: {
        justifyContent: "center",
        alignItems: "center",
    },
    img_container_img: {
        width: "99%",
        height: 400,
    },
    info: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    info_user: {
        fontFamily: "Omnes SemiBold",
    },
    info_description: {
        fontFamily: "Omnes Medium",
    },
    date: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    date_text: {
        color: "#b0b0b0",
        fontSize: 12,
        fontFamily: "Omnes Medium",
    },
    modalView: {
        backgroundColor: "white",
        flex: 0.5,
        width: "90%",
        borderRadius: 20,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: 20,
        gap: 15,
        margin: "5%",
        marginTop: "50%"
    },
    modalTitle: {
        fontFamily: "Omnes Black",
        fontSize: 25,
        marginBottom: 10
    },
    modalName: {
        width: "100%"
    },
    modalNameText: {
        fontFamily: "Omnes SemiBold",
    },
    modalNameInput: {
        fontFamily: "Omnes Medium",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 10
    },
    modalNote: {
        width: "100%"
    },
    modalNoteText: {
        fontFamily: "Omnes SemiBold",
    },
    modalNoteInput: {
        fontFamily: "Omnes Medium",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 10
    },
    modalBtn: {
        width: "99%",
        gap: 15,
        marginTop: 20
    },
    modalUpdate: {
        backgroundColor: "black",
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modalUpdateBtn: {
        fontFamily: "Omnes Bold",
        color: "white",
        paddingVertical: 15,
    },
    modalCancel: {
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modalCancelBtn: {
        fontFamily: "Omnes Medium",
        paddingVertical: 15,
    },
});
