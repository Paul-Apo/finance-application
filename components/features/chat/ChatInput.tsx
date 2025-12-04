import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard, Platform } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/color';

type ChatInputProps = {
    onSend: (message: string) => void;
    onVoiceMode?: () => void;
    onTranscription?: () => void;
};

const ChatInput: React.FC<ChatInputProps> = ({
                                                 onSend,
                                                 onVoiceMode,
                                                 onTranscription
                                             }) => {
    const [message, setMessage] = useState('');
    const inputRef = useRef<TextInput>(null);

    const handleSend = () => {
        if (message.trim()) {
            onSend(message.trim());
            setMessage('');
            Keyboard.dismiss();
        }
    };

    const handleVoiceMode = () => {
        if (onVoiceMode) {
            onVoiceMode();
        }
    };

    const handleTranscription = () => {
        if (onTranscription) {
            onTranscription();
        }
    };

    return (
        <View className="px-4 pt-2 pb-6 bg-[#1A1A1A]">
            <View className="flex-row items-end bg-[#242424] rounded-2xl px-4 py-2">
                {/* Voice interaction icon */}
                <TouchableOpacity
                    onPress={handleVoiceMode}
                    className="pr-2 pb-1"
                >
                    <Ionicons
                        name="chatbubble-ellipses-outline"
                        size={22}
                        color={Colors.white}
                    />
                </TouchableOpacity>

                {/* Voice recording/transcription icon */}
                <TouchableOpacity
                    onPress={handleTranscription}
                    className="pr-3 pb-1"
                >
                    <FontAwesome
                        name="microphone"
                        size={20}
                        color={Colors.white}
                    />
                </TouchableOpacity>

                <TextInput
                    ref={inputRef}
                    className="flex-1 text-[#FCFCFC] min-h-[25px] max-h-[100px] mr-2"
                    placeholder="Message AI Assistant..."
                    placeholderTextColor="#999"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                    blurOnSubmit={false}
                    returnKeyType="default"
                />

                <TouchableOpacity
                    onPress={handleSend}
                    disabled={!message.trim()}
                    className={`p-2 rounded-full ${!message.trim() ? 'opacity-50' : ''}`}
                >
                    <AntDesign
                        name="arrow-up"
                        size={20}
                        color={message.trim() ? Colors.tintColor : "#999"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatInput;
