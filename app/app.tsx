import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./profilescreen";

const Tab = createBottomTabNavigator();

// Coming Soon screens for other tabs
const ComingSoonScreen = ({ title }) => (
  <View style={styles.comingSoonContainer}>
    <Text style={styles.comingSoonText}>Coming Soon</Text>
  </View>
);

const HomeScreen = () => <ComingSoonScreen title="Home" />;
const FavoriteScreen = () => <ComingSoonScreen title="Favorite" />;
const ScanScreen = () => <ComingSoonScreen title="Scan" />;
const HistoryScreen = () => <ComingSoonScreen title="History" />;

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Scan") {
            iconName = focused ? "scan" : "scan-outline";
          } else if (route.name === "History") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5D3891",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#5D3891",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  comingSoonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5D3891",
  },
});
