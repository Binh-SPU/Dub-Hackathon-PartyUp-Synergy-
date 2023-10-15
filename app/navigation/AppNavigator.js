import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "../screens/CategoryScreen";
import PostingScreen from "../screens/PostingScreen";
import LoginScreen from "../screens/LoginScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.black,
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: colors.grey,
        tabBarInactiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Post" component={PostingScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
