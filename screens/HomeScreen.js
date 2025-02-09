import { useContext, useReducer, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { FAB, Icon, Image } from "react-native-elements";
import BottomSheet from "./BottomNavigationSheet/BottomNavigationSheet";
import ScreenHeader from "../components/Header";
import { ImageContext } from "../contexts/ImageContext";
import SvgComponentEnd from "../assets/end";

const collapse = (state, action) => {
    switch (action.type) {
        case 'EXPAND':
            return { ...state, [action.id]: !state[action.id] };
        default:
            return state;
    }
};

const ExpandableText = ({ text, id, dispatch, expanded, plantName }) => {
    const maxLength = 70;

    return (
        <View style={styles.info}>
            <Text>
                <Text style={styles.info_user}>{`${plantName}  `}</Text>
                <Text onPress={() => dispatch({ type: 'EXPAND', id })} style={styles.info_description}>
                    {expanded ? text : `${text.slice(0, maxLength)}`}
                </Text>
                {text.length > maxLength && (
                    <Text onPress={() => dispatch({ type: 'EXPAND', id })} style={styles.collapse}>
                        {expanded ? '.  show less' : '...more'}
                    </Text>
                )}
            </Text>
        </View>
    );
};

export default function HomeScreen() {
    const { uploadData } = useContext(ImageContext);
    const refRBSheet = useRef();
    const [expandedState, dispatch] = useReducer(collapse, {});

    function Render() {
        if (!uploadData || uploadData.length === 0) {
            return (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No posts yet. Add your first plant!</Text>
                </View>
            );
        }

        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.element}>
                {uploadData.slice().reverse().map((element, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.head}>
                            <Image 
                                PlaceholderContent={<ActivityIndicator />} 
                                style={styles.pro_img} 
                                source={{ uri: element.img }} 
                            />
                            <Text style={styles.pro_text}>{element.owner}</Text>
                        </View>
                        <View style={styles.img_container}>
                            <Image 
                                PlaceholderContent={<ActivityIndicator />} 
                                style={styles.img_container_img} 
                                source={{ uri: element.img }} 
                                resizeMode="cover"
                            />
                        </View>
                        <ExpandableText
                            text={element.description}
                            id={index}
                            dispatch={dispatch}
                            expanded={!!expandedState[index]}
                            plantName={element.name}
                        />
                        <View style={styles.date}>
                            <Text style={styles.date_text}>{element.date}</Text>
                        </View>
                    </View>
                ))}
                <End />
            </ScrollView>
        );
    }

    function End() {
        return (
            <View style={styles.endContainer}>
                <SvgComponentEnd />
                <Text style={styles.endText}>You are all caught up!</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <ScreenHeader title="Plant Gallery" font="billabong" fontSize={30} />
            <ScrollView contentContainerStyle={styles.main}>
                <Render />
            </ScrollView>
            <BottomSheet refRBSheet={refRBSheet} />
            <FAB 
                onPress={() => refRBSheet.current?.open()} 
                placement="right" 
                color="black" 
                icon={<Icon name="add" color="white" />} 
                overlayColor="#b0b0b0" 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    element: {
        flexDirection: "column",
        marginTop: 3,
    },
    card: {
        paddingVertical: 20,
        backgroundColor: "white",
        marginTop: 3,
        marginHorizontal: 5,
        borderRadius: 5,
        gap: 15,
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
    },
    pro_img: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    pro_text: {
        fontSize: 16,
        fontFamily: "Omnes SemiBold"
    },
    img_container: {
        flex: 0.6,
    },
    img_container_img: {
        width: "100%",
        height: 400,
    },
    info: {
        flexDirection: "row",
        paddingHorizontal: 15,
    },
    info_user: {
        fontFamily: "Omnes SemiBold"
    },
    info_description: {
        fontFamily: "Omnes Medium"
    },
    collapse: {
        color: "#b0b0b0",
        fontWeight: "400",
    },
    date: {
        paddingHorizontal: 15,
    },
    date_text: {
        color: "#b0b0b0",
        fontSize: 12,
        fontFamily: "Omnes Medium"
    },
    endContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
    },
    endText: {
        fontSize: 20,
        fontFamily: "Omnes SemiBold"
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    emptyText: {
        fontSize: 18,
        color: "#b0b0b0",
        fontFamily: "Omnes Medium"
    },
});
