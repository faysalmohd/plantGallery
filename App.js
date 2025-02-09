import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import { ImageProvider } from "./contexts/ImageContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./screens/Profile/ProfileScreen";
import AccountImageCardScreen from "./screens/Profile/AccountImageCardScreen";
import AccountScreen from "./screens/SettingScreens/AccountScreen";
import AppVersionScreen from "./screens/SettingScreens/AppVersionScreen";
import BlockedUserScreen from "./screens/SettingScreens/BlockedUserScreen";
import CameraScreen from "./screens/SettingScreens/CameraScreen";
import DateAndTimeScreen from "./screens/SettingScreens/DateAndTimeScreen";
import DeleteAccountScreen from "./screens/SettingScreens/DeleteAccountScreen";
import LanguageAndRegionScreen from "./screens/SettingScreens/LanguageAndRegionScreen";
import LocationScreen from "./screens/SettingScreens/LocationScreen";
import ManageDevicesScreen from "./screens/SettingScreens/ManageDevicesScreen";
import MicrophoneScreen from "./screens/SettingScreens/MicrophoneScreen";
import NotificationScreen from "./screens/SettingScreens/NotificationScreen";
import PasswordScreen from "./screens/SettingScreens/PasswordScreen";
import PrivacyPloicyScreen from "./screens/SettingScreens/PrivacyPolicyScreen";
import PrivacyScreen from "./screens/SettingScreens/PrivacyScreen";
import RateUsScreen from "./screens/SettingScreens/RateUsScreen";
import ReportProblemScreen from "./screens/SettingScreens/ReportProblemScreen";
import StorageFileScreen from "./screens/SettingScreens/StorageFileScreen";
import TermsAndConditionsScreen from "./screens/SettingScreens/TermsAndConditionsScreen";
import TwoFactorScreen from "./screens/SettingScreens/TwoFactorScreen";
import ThemeScreen from "./screens/SettingScreens/ThemeScreen";
import FAQScreen from "./screens/SettingScreens/FAQScreen";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Home") iconName = "home";
              else if (route.name === "Profile") iconName = "user";
              else if (route.name === "Setting") iconName = "settings";
              return <Icon name={iconName} size={25} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#bababa",
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            },
            tabBarIconStyle: {
              marginTop: 10,
            },
            animation: "shift",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />

          <Tab.Screen name="Setting">
          {() => (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Settings" component={SettingScreen} />
                <Stack.Screen name="AccountScreen" component={AccountScreen} />
                <Stack.Screen name="AppVersionScreen" component={AppVersionScreen} />
                <Stack.Screen name="BlockedUserScreen" component={BlockedUserScreen} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} />
                <Stack.Screen name="DateAndTimeScreen" component={DateAndTimeScreen} />
                <Stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} />
                <Stack.Screen name="LanguageAndRegionScreen" component={LanguageAndRegionScreen} />
                <Stack.Screen name="LocationScreen" component={LocationScreen} />
                <Stack.Screen name="ManageDevicesScreen" component={ManageDevicesScreen} />
                <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
                <Stack.Screen name="FAQScreen" component={FAQScreen} />
                <Stack.Screen name="MicrophoneScreen" component={MicrophoneScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
                <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPloicyScreen} />
                <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
                <Stack.Screen name="RateUsScreen" component={RateUsScreen} />
                <Stack.Screen name="ReportProblemScreen" component={ReportProblemScreen} />
                <Stack.Screen name="StorageFileScreen" component={StorageFileScreen} />
                <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
                <Stack.Screen name="TwoFactorScreen" component={TwoFactorScreen} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          
          <Tab.Screen name="Profile">
            {() => (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Account" component={ProfileScreen} />
                <Stack.Screen name="ImageScreen" component={AccountImageCardScreen} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}