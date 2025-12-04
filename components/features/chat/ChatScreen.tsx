
import React, { useState, useCallback, useEffect } from 'react';
import { View, Platform, Keyboard, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Message } from '@/types';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

type ChatScreenProps = {
    isStandalone?: boolean;
};

const ChatScreen: React.FC<ChatScreenProps> = ({ isStandalone = false }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const insets = useSafeAreaInsets();

    // Monitor keyboard height changes
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            (e) => {
                // On iOS, we need to account for safe area
                const offset = Platform.OS === 'ios' ? insets.bottom : 0;
                setKeyboardHeight(e.endCoordinates.height - offset);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => {
                setKeyboardHeight(0);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [insets.bottom]);

    // Add new message to the chat
    const handleSend = useCallback((text: string) => {
        // Create and add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            createdAt: Date.now(),
        };

        setMessages(prev => [...prev, userMessage]);

        // Simulate AI response after a short delay
        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'This is a placeholder response. The actual AI integration will be added later.',
                sender: 'ai',
                createdAt: Date.now() + 300,
            };
            setMessages(prev => [...prev, aiMessage]);
        }, 300);
    }, []);

    // Start a new chat
    const handleNewChat = useCallback(() => {
        setMessages([]);
    }, []);

    // Placeholder for voice mode (interactive conversation)
    const handleVoiceMode = useCallback(() => {
        const aiMessage: Message = {
            id: Date.now().toString(),
            text: 'Voice conversation mode activated. I\'m listening to your commands.',
            sender: 'ai',
            createdAt: Date.now(),
        };
        setMessages(prev => [...prev, aiMessage]);
    }, []);

    // Placeholder for transcription mode
    const handleTranscription = useCallback(() => {
        const aiMessage: Message = {
            id: Date.now().toString(),
            text: 'Speech-to-text mode activated. Speak and I\'ll transcribe your message.',
            sender: 'ai',
            createdAt: Date.now(),
        };
        setMessages(prev => [...prev, aiMessage]);
    }, []);

    return (
        <View className="flex-1 bg-[#1A1A1A]">
            <ChatHeader onNewChat={handleNewChat} showBackButton={true} />

            {/* Container that adjusts its bottom padding based on keyboard height */}
            <View
                className="flex-1"
                style={{ paddingBottom: keyboardHeight }}
            >
                {/* Messages take up available space */}
                <View className="flex-1">
                    <MessageList messages={messages} />
                </View>

                {/* Input always stays at the bottom of available space */}
                <ChatInput
                    onSend={handleSend}
                    onVoiceMode={handleVoiceMode}
                    onTranscription={handleTranscription}
                />
            </View>
        </View>
    );
};

export default ChatScreen;
