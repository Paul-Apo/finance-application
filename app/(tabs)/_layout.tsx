import Colors from "@/constants/color";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.grey,
          position: "absolute",
          bottom: 40,
          height: 63,
          marginHorizontal: 80,
          paddingHorizontal: 10,
          borderRadius: 60,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: "#333",
          borderTopColor: "#333",
        },
        tabBarItemStyle: {
          padding: 12.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1, // IMPORTANT FIX
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#999",
        tabBarActiveTintColor: Colors.white,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 12,
                borderRadius: 40,
                width: 48,
                height: 48,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: focused ? Colors.tintColor : Colors.grey,
              }}
            >
              <SimpleLineIcons name="pie-chart" color={color} size={18} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 12,
                borderRadius: 40,
                width: 48,
                height: 48,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: focused ? Colors.tintColor : Colors.grey,
              }}
            >
              <FontAwesome name="user-o" color={color} size={18} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 12,
                borderRadius: 40,
                width: 48,
                height: 48,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: focused ? Colors.tintColor : Colors.grey,
              }}
            >
              <AntDesign name="swap" color={color} size={18} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
