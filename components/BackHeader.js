import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function BackHeader({ title = "Plants", fontSize, font = "Omnes SemiBold", icon = "arrow-left", iconSize = 30, iconType = "feather", callback = null }) {
    return (
        <View style={styles.view}>
            <TouchableOpacity>
                <Icon onPress={callback ? callback : undefined} name={icon} size={iconSize} type={iconType} />
            </TouchableOpacity>
            <Text style={{ fontFamily: font, fontSize: fontSize }}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "white",
        gap: 20,
    },
});