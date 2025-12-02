import Colors from "@/constants/color";
import { Stack } from "expo-router";

import { StyleSheet, Text, View } from "react-native";

const Transaction = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={style.containers}>
        <Text style={style.text}>Transactions</Text>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
  },
});
export default Transaction;
