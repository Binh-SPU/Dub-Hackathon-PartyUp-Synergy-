import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "../screens/CategoryScreen";
import PostingScreen from "../screens/PostingScreen";
import LoginScreen from "../screens/LoginScreen";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
        tabBarLabelStyle: { marginBottom: 20 },
        tabBarStyle: {
          paddingBottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="format-list-bulleted" color={colors.white} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostingScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="plus-thick" color={colors.white} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="login" color={colors.white} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
