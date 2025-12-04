import React, { useRef, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Message } from '@/types';
import MessageBubble from './MessageBubble';

type MessageListProps = {
    messages: Message[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    const flatListRef = useRef<FlatList>(null);

    // Auto-scroll to the bottom when new messages arrive
    useEffect(() => {
        if (messages.length > 0 && flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [messages.length]);

    // If no messages, show an empty state
    if (messages.length === 0) {
        return (
            <View className="flex-1 justify-center items-center px-8">
                <View className="bg-[#242424] p-6 rounded-xl">
                    <View className="bg-[#723FEB]/20 p-4 rounded-lg mb-2">
                        <View className="h-12 w-12 rounded-full bg-[#723FEB] self-center justify-center items-center">
                            <View className="h-5 w-5 rounded-full bg-[#242424]" />
                        </View>
                    </View>
                    <View className="items-center">
                        <View className="w-24 h-2.5 bg-[#333] rounded-full mb-2" />
                        <View className="w-40 h-2 bg-[#333] rounded-full mb-1.5" />
                        <View className="w-36 h-2 bg-[#333] rounded-full" />
                    </View>
                </View>
            </View>
        );
    }

    return (
        <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <MessageBubble message={item} />}
            contentContainerStyle={{ padding: 16, paddingTop: 20 }}
            showsVerticalScrollIndicator={false}
            // Not inverting the list here because I'm keeping it simple with auto-scroll
            // In a production app, you'd want inverted for better UX with large chat histories
        />
    );
};

export default MessageList;
