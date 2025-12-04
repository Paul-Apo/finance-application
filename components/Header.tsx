import Colors from "@/constants/color";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.black }} edges={['top']}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 70,
                    paddingHorizontal: 20,
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/02/99/a0/0299a00ef88c199c34083f8add44415e.jpg",
                        }}
                        style={{ width: 50, height: 50, borderRadius: 30 }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: Colors.white, fontSize: 12 }}>
                            Hi Jenny!
                        </Text>
                        <Text style={{ color: Colors.white, fontSize: 16 }}>
                            Your <Text style={{ fontWeight: 800 }}>Screen Time</Text>
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => {}}
                    style={{
                        borderWidth: 1,
                        borderColor: "#666",
                        padding: 8,
                        borderRadius: 8,
                    }}
                >
                    <Text style={{ color: Colors.white, fontSize: 12 }}>
                        My Failures
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Header;
