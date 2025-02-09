import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { ImageContext } from "../../contexts/ImageContext";
import SvgComponentBackSplash from "../../assets/backSplash";
import SvgComponentEnd from "../../assets/end";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const screenWidth = Dimensions.get("window").width;
  const itemSize = screenWidth / 3;
  const navigation = useNavigation();

  const { uploadData } = useContext(ImageContext);

  function PlantCount() {
    return (
      <View style={{ flexDirection: "row", gap: 7, justifyContent: "center", alignItems: "center" }}>
        <SvgComponentEnd width={35} />
        <Text style={{ fontFamily: "Omnes SemiBold", fontSize: 30 }}>
          {uploadData.filter((ele) => ele.owner === "planter_the_plant").length}
        </Text>
      </View>
    );
  }

  function ActionBtn({ text, icon, iconSize }) {
    return (
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
          borderWidth: 1,
          paddingVertical: 5,
          width: "45%",
          borderRadius: 5,
        }}
      >
        <Icon type="feather" size={iconSize} name={icon}></Icon>
        <Text style={{ fontFamily: "Omnes Medium" }}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: "center" }}>
        <SvgComponentBackSplash />
        <View style={styles.profileCard}>
          <Avatar
            style={styles.profileImage}
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_1280.png",
            }}
            rounded
            showEditButton={true}
          />
          <PlantCount />
          <Text style={styles.profileUsername}>planter_the_plant</Text>
          <Text style={styles.profileBio}>This is the bio section. This is the bio section.</Text>
          <View style={{ flexDirection: "row", gap: 7, paddingTop: 10 }}>
            <ActionBtn text="Edit Profile" icon="settings" iconSize={16} />
            <ActionBtn text="New Plant" icon="plus" iconSize={16} />
          </View>
          {uploadData.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No posts yet. Add your first plant!</Text>
            </View>
          ) : (
            <FlatList
              data={uploadData.filter((ele) => ele.owner === "planter_the_plant").reverse()}
              keyExtractor={(item) => item.id}
              numColumns={3}
              scrollEnabled={false}
              contentContainerStyle={styles.gridContainer}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("ImageScreen", { id: item.id, name: item.name, note: item.description, img: item.img, date: item.date, owner: item.owner })}
                  activeOpacity={0.7}
                  style={[styles.item, { width: itemSize - 2, height: itemSize }]}
                >
                  <Image source={{ uri: item.img }} style={styles.image} />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    color: "black",
  },
  profileCard: {
    top: -200,
    alignItems: "center",
  },
  profileImage: {
    height: 160,
    width: 160,
  },
  profileUsername: {
    fontSize: 20,
    fontFamily: "Omnes SemiBold",
  },
  profileBio: {
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 20,
    fontFamily: "Omnes Medium",
  },
  gridContainer: {
    display: "flex",
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 3,
    paddingVertical: 20,
  },
  item: {
    padding: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  emptyContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#b0b0b0",
    fontFamily: "Omnes Medium",
  },
});
