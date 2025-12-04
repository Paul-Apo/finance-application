import React from 'react';
import { View, Text } from 'react-native';
import { Message } from '@/types';


type MessageBubbleProps = {
    message: Message;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <View
            className={`mb-4 max-w-[85%] ${isUser ? 'self-end' : 'self-start'}`}
        >
            <View
                className={`px-4 py-3 rounded-2xl shadow-sm ${
                    isUser
                        ? 'bg-[#723FEB] rounded-tr-sm'
                        : 'bg-[#242424] rounded-tl-sm'
                }`}
            >
                <Text className="text-[#FCFCFC]">{message.text}</Text>
            </View>
            <Text
                className={`text-xs text-[#FCFCFC]/50 mt-1 ${
                    isUser ? 'text-right mr-1' : 'ml-1'
                }`}
            >
                {new Date(message.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </Text>
        </View>
    );
};

export default MessageBubble;
