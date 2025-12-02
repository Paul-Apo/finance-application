import Expense from "@/components/expense";
import Header from "@/components/Header";
import Spendings from "@/components/spendings";
import Colors from "@/constants/color";
import expense from "@/data/expenses.json";
import spendings from "@/data/spending.json";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
const IndexPage = () => {
  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    {
      value: 3,
      color: "#FFA5BA",
      gradientCenterColor: "#FFF7F7",
      text: "3%",
    },
  ];
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[style.container, { paddingTop: 110 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={style.text}>
                My <Text style={{ fontWeight: 800 }}>Watch Time</Text>
              </Text>
              <Text
                style={{ fontSize: 36, color: Colors.white, fontWeight: 700 }}
              >
                $1452<Text style={{ fontSize: 22, fontWeight: 400 }}>.00</Text>
              </Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: "center" }}>
              <PieChart
                data={pieData}
                donut
                sectionAutoFocus
                semiCircle
                focusOnPress
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View>
            <Expense expenseList={expense} />
          </View>
          <View>
            <Spendings spendingsList={spendings} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default IndexPage;
