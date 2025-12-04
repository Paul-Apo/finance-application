import Colors from "@/constants/color";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import React from "react";
import { View } from "react-native";

const Layout = () => {
    const pathname = usePathname();

    // Hide the tab bar on the transaction (chat) screen
    const isTransactionScreen = pathname.includes('/transaction');

    return (
        <Tabs
            screenOptions={({ route }) => ({
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
                    // Hide tab bar on transaction screen
                    display: route.name === 'transaction' ? 'none' : 'flex',
                },
                tabBarItemStyle: {
                    padding: 12.5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#999",
                tabBarActiveTintColor: Colors.white,
                // Hide header for all tab screens
                headerShown: false,
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View
                            className={`p-3 rounded-full w-12 h-12 flex flex-row justify-center items-center ${
                                focused ? "bg-[#723FEB]" : "bg-[#242424]"
                            }`}
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
                            className={`p-3 rounded-full w-12 h-12 flex flex-row justify-center items-center ${
                                focused ? "bg-[#723FEB]" : "bg-[#242424]"
                            }`}
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
                            className={`p-3 rounded-full w-12 h-12 flex flex-row justify-center items-center ${
                                focused ? "bg-[#723FEB]" : "bg-[#242424]"
                            }`}
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
