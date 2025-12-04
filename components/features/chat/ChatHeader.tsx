import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/color';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ChatHeaderProps = {
    onNewChat?: () => void;
    showBackButton?: boolean;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({
                                                   onNewChat,
                                                   showBackButton = true
                                               }) => {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    // Calculate proper top padding based on safe area
    const topPadding = insets.top > 0 ? insets.top : 12;

    return (
        <View
            style={{ paddingTop: topPadding }}
            className="bg-[#1A1A1A] pb-4"
        >
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

            <View className="flex-row items-center justify-between px-6 pt-3">
                {/* Left side - Beautiful back button */}
                <View className="flex-1">
                    {showBackButton && (
                        <TouchableOpacity
                            onPress={() => router.push('/')}
                            className="flex-row items-center"
                        >
                            <View className="w-9 h-9 bg-[#2D2D30] rounded-xl items-center justify-center mr-3 border border-[#404040]">
                                <AntDesign name="arrow-left" size={18} color="#E0E0E0" />
                            </View>
                            <Text className="text-[#E0E0E0] text-sm font-medium">Back</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Center - Minimal AI info */}
                <View className="items-center">
                    <Text className="text-[#FCFCFC] font-bold text-xl">AI</Text>
                    <View className="flex-row items-center mt-0.5">
                        <View className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5" />
                        <Text className="text-[#FCFCFC]/70 text-xs">Active</Text>
                    </View>
                </View>

                {/* Right side - New chat button */}
                <View className="flex-1 items-end">
                    {onNewChat && (
                        <TouchableOpacity
                            onPress={onNewChat}
                            className="w-9 h-9 bg-[#2D2D30] rounded-xl items-center justify-center border border-[#404040]"
                        >
                            <Ionicons
                                name="create-outline"
                                size={18}
                                color="#E0E0E0"
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Subtle divider */}
            <View className="mt-4 mx-6">
                <View className="h-px bg-[#2D2D30]" />
            </View>
        </View>
    );
};

export default ChatHeader;
