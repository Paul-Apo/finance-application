import React from 'react';
import { View } from 'react-native';
import ChatScreen from '@/components/features/chat/ChatScreen';

// This is a standalone chat screen accessible outside the tab navigation
export default function StandaloneChatScreen() {
    return (
        <View className="flex-1">
            <ChatScreen isStandalone={true} />
        </View>
    );
}
