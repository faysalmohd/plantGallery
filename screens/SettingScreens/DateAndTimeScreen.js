import { StyleSheet, Text, View } from "react-native";
import BackHeader from "../../components/BackHeader";
import { useNavigation } from "@react-navigation/native";

export default function DateAndTimeScreen({ route }) {
    const navigation = useNavigation()
    const { title } = route.params;
    return (
        <View style={styles.main}>
            <BackHeader title={title} fontSize={20} callback={() => {navigation.canGoBack() ? navigation.goBack() : null}} />
            <View style={styles.view}>
               <Text style={styles.text}>{title}</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        display: "flex",
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "Omnes Black",
        fontSize: 20
    }
})