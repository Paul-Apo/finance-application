
import Expense from "@/components/expense";
import Header from "@/components/Header";
import Spendings from "@/components/spendings";
import Colors from "@/constants/color";
import expense from "@/data/expenses.json";
import spendings from "@/data/spending.json";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import pieData from "@/data/PieData.json";

const IndexPage = () => {
    return (
        <View className="flex-1 bg-[#1A1A1A]">

            <Header />

            {/* Main content */}
            <View className="flex-1 px-5 pt-5">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="flex-row justify-between items-center">
                        <View className="gap-2.5">
                            <Text className="text-[#FCFCFC] text-base">
                                My <Text className="font-extrabold">Watch Time</Text>
                            </Text>
                            <Text className="text-[36px] text-[#FCFCFC] font-bold">
                                $1452<Text className="text-[22px] font-normal">.00</Text>
                            </Text>
                        </View>
                        <View className="py-5 items-center">
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
                                        <View className="justify-center items-center">
                                            <Text className="text-[22px] text-white font-bold">
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
        </View>
    );
};

export default IndexPage;
