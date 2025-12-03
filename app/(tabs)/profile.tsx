// app/profile.tsx
import React from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { mockUser } from "@/data/profile";
import { FontAwesome, Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/color";
import {ProfileItemProps} from "@/types";

const Profile = () => {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View className="flex-1" style={styles.container}>
                <ScrollView className="flex-1 px-5">
                    {/* Header section */}
                    <View className="mt-12 mb-6">
                        <Text className="text-white text-2xl font-bold">Profile</Text>
                    </View>

                    {/* User info section */}
                    <View className="flex-row items-center mb-8">
                        <View className="bg-gray-700 rounded-full w-20 h-20 items-center justify-center mr-4">
                            <Text className="text-white text-2xl">
                                {mockUser.name.charAt(0)}
                            </Text>
                        </View>
                        <View>
                            <Text className="text-white text-xl font-bold">
                                {mockUser.name}
                            </Text>
                            <Text className="text-gray-400">
                                {mockUser.role}
                            </Text>
                            <View className="flex-row items-center mt-1">
                                <View className="bg-blue-500 rounded-full px-2 py-1">
                                    <Text className="text-white text-xs font-semibold">
                                        Free
                                    </Text>
                                </View>
                                <Text className="text-gray-400 ml-2">{mockUser.points || 120} points</Text>
                            </View>
                        </View>
                    </View>

                    {/* Premium section */}
                    <TouchableOpacity
                        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 mb-6"
                    >
                        <View className="flex-row items-center justify-between">
                            <View>
                                <Text className="text-white text-lg font-bold">Upgrade to Premium</Text>
                                <Text className="text-gray-200 text-sm mt-1">
                                    Get unlimited access to all features
                                </Text>
                            </View>
                            <View className="bg-white/20 rounded-full p-2">
                                <MaterialIcons name="star" size={24} color="#FFD700" />
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Settings sections */}
                    <View className="mb-8">
                        <Text className="text-gray-400 text-sm uppercase mb-2">Account</Text>

                        <ProfileItem
                            icon={<FontAwesome name="user-circle" size={20} color={Colors.white} />}
                            title="Personal Information"
                            subtitle="Update your profile information"
                        />

                        <ProfileItem
                            icon={<MaterialIcons name="vpn-key" size={20} color={Colors.white} />}
                            title="Account Type"
                            subtitle="Free account"
                            rightElement={<View className="bg-gray-700 rounded-lg px-2 py-1"><Text className="text-white text-xs">Free</Text></View>}
                        />

                        <ProfileItem
                            icon={<MaterialCommunityIcons name="gift" size={20} color={Colors.white} />}
                            title="Points"
                            subtitle="Earn and redeem points"
                            rightElement={<Text className="text-blue-500 font-bold">{mockUser.points || 120}</Text>}
                        />
                    </View>

                    <View className="mb-8">
                        <Text className="text-gray-400 text-sm uppercase mb-2">Support</Text>

                        <ProfileItem
                            icon={<Ionicons name="help-circle" size={20} color={Colors.white} />}
                            title="Help"
                            subtitle="FAQ and troubleshooting"
                        />

                        <ProfileItem
                            icon={<MaterialIcons name="library-books" size={20} color={Colors.white} />}
                            title="Documentation"
                            subtitle="Learn how to use the app"
                        />

                        <ProfileItem
                            icon={<MaterialIcons name="support-agent" size={20} color={Colors.white} />}
                            title="Customer Support"
                            subtitle="Contact our support team"
                        />
                    </View>

                    {/* Placeholder note */}
                    <Text className="text-gray-500 text-xs text-center mb-10">
                        These features are placeholders. No backend implementation yet.
                    </Text>
                </ScrollView>
            </View>
        </>
    );
};

// Profile item component
const ProfileItem = ({ icon, title, subtitle, rightElement }: ProfileItemProps) => {
    return (
        <TouchableOpacity
            className="flex-row items-center justify-between py-3 border-b border-gray-800"
        >
            <View className="flex-row items-center">
                <View className="mr-3">
                    {icon}
                </View>
                <View>
                    <Text className="text-white text-base">{title}</Text>
                    <Text className="text-gray-400 text-xs">{subtitle}</Text>
                </View>
            </View>
            <View className="flex-row items-center">
                {rightElement || <MaterialIcons name="chevron-right" size={20} color={Colors.white} />}
            </View>
        </TouchableOpacity>
    );
};

// Fallback styles to match the app's dark theme
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    }
});

export default Profile;
