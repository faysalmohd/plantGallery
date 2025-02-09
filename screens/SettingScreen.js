import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import ScreenHeader from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function SettingScreen() {

    const navigation = useNavigation()

    function Card({ children, title }) {
        return (
            <View>
                <Text style={styles.cardTitle}>{title}</Text>
                <View style={styles.cardView}>
                    {children}
                </View>
            </View>
        )
    }

    function Row({ text, icon, iconType = "feather", callback }) {
        return (
            <TouchableOpacity style={styles.row} onPress={callback}>
                <Icon type={iconType} name={icon} />
                <Text style={styles.rowText}>{text}</Text>
            </TouchableOpacity>
        )
    }

    function DateJoined({ date }) {
        return (
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: 20, paddingBottom: 80 }}>
                <Text style={{ color: "#b0b0b0", fontFamily: "Omnes Medium" }}>
                    Planter since {date}
                </Text>
            </View>
        )
    }
    return (
        <View>
            <ScreenHeader title="Settings" font="Omnes Black" fontSize={25} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card title="General">
                    <Row text="Account" icon="user" iconType="feather" callback={() => {navigation.navigate('AccountScreen', {title: "Account"})}} />
                    <Row text="Notification" icon="bell" iconType="feather" callback={() => {navigation.navigate('NotificationScreen', {title: "Notification"})}} />
                    <Row text="Date & Time" icon="clock" iconType="feather" callback={() => {navigation.navigate('DateAndTimeScreen', {title: "Date And Time"})}} />
                </Card>
                <Card title="Account & Security">
                    <Row text="Manage Password" icon="key" iconType="feather" callback={() => {navigation.navigate('PasswordScreen', {title: "Password"})}} />
                    <Row text="Two-Factor Authentication (2FA)" icon="lock" iconType="feather" callback={() => {navigation.navigate('TwoFactorScreen', {title: "Two Factor"})}} />
                    <Row text="Manage Devices & Sessions" icon="smartphone" iconType="feather" callback={() => {navigation.navigate('ManageDevicesScreen', {title: "Manage Devices"})}} />
                    <Row text="Delete Account" icon="trash" iconType="feather" callback={() => {navigation.navigate('DeleteAccountScreen', {title: "Delete Account"})}} />
                </Card>
                <Card title="Privacy & Permissions">
                    <Row text="Privacy Settings" icon="shield" iconType="feather" callback={() => {navigation.navigate('PrivacyScreen', {title: "Privacy"})}} />
                    <Row text="Blocked Users" icon="user-x" iconType="feather" callback={() => {navigation.navigate('BlockedUserScreen', {title: "Blocked User"})}} />
                    <Row text="Location Services" icon="map-pin" iconType="feather" callback={() => {navigation.navigate('LocationScreen', {title: "Location"})}} />
                    <Row text="Microphone Access" icon="mic" iconType="feather" callback={() => {navigation.navigate('MicrophoneScreen', {title: "Microphone"})}} />
                    <Row text="Camera Access" icon="camera" iconType="feather" callback={() => {navigation.navigate('CameraScreen', {title: "Camera"})}} />
                    <Row text="Storage & File Access" icon="folder" iconType="feather" callback={() => {navigation.navigate('StorageFileScreen', {title: "Storage File"})}} />
                </Card>
                <Card title="App Preferences">
                    <Row text="Language & Region" icon="globe" iconType="feather" callback={() => {navigation.navigate('LanguageAndRegionScreen', {title: "Language And Region"})}} />
                    <Row text="Theme" icon="layout" iconType="feather" callback={() => {navigation.navigate('ThemeScreen', {title: "Theme"})}} />
                </Card>
                <Card title="Support & Help">
                    <Row text="FAQs & Help Center" icon="headphones" iconType="feather" callback={() => {navigation.navigate('FAQScreen', {title: "FAQ"})}} />
                    <Row text="Report a Problem" icon="help-circle" iconType="feather" callback={() => {navigation.navigate('ReportProblemScreen', {title: "Report Problem"})}} />
                    <Row text="Rate Us / Feedback" icon="star" iconType="feather" callback={() => {navigation.navigate('RateUsScreen', {title: "Rate Us"})}} />
                </Card>
                <Card title="About & Legal">
                    <Row text="Terms & Conditions" icon="file-text" iconType="feather" callback={() => {navigation.navigate('TermsAndConditionsScreen', {title: "Terms And Conditions"})}} />
                    <Row text="Privacy Policy" icon="book-open" iconType="feather" callback={() => {navigation.navigate('PrivacyPolicyScreen', {title: "Privacy Policy"})}} />
                    <Row text="App Version" icon="info" iconType="feather" callback={() => {navigation.navigate('AppVersionScreen', {title: "App Version"})}} />
                </Card>

                <DateJoined date="09 Feb 2025" />
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    cardTitle: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 30,
        fontFamily: "Omnes Black",
        fontSize: 17
    },
    cardView: {
        backgroundColor: "#b0b0b0",
    },
    row: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        gap: 15,
        paddingVertical: 25,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderBottomWidth: 0.3
    },
    rowText: {
        fontFamily: "Omnes SemiBold",
    }
});