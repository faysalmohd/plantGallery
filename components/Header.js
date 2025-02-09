import { View, Text, StyleSheet } from "react-native";

export default function ScreenHeader({title, fontSize, font}) {
    return (
        <View style={styles.view}>
            <Text style={{fontFamily: font, fontSize: fontSize}}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        justifyContent: "center",
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: "white"
    },
});