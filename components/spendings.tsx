import Colors from "@/constants/color";
import { SpendingType } from "@/types";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Spendings = ({ spendingsList }: { spendingsList: SpendingType[] }) => {
  let icon = <Text style={styles.clockIcon}>🕒</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Jan's <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {spendingsList.map((item) => {
        if (item.category == "AirBnB Rent") {
          icon = (
            <FontAwesome
              name="instagram"
              width={22}
              height={22}
              size={24}
              color={Colors.white}
            />
          );
        } else if (item.category == "Netflix") {
          icon = (
            <FontAwesome
              name="youtube"
              width={22}
              height={22}
              size={24}
              color={Colors.white}
            />
          );
        } else if (item.category == "Spotify") {
          icon = (
            <FontAwesome
              name="spotify"
              width={22}
              height={22}
              size={24}
              color={Colors.white}
            />
          );
        } else if (item.category == "Amazon") {
          icon = (
            <FontAwesome
              name="amazon"
              width={22}
              height={22}
              size={24}
              color={Colors.white}
            />
          );
        } else if (item.category == "Tiktok") {
          icon = (
            <FontAwesome
              name="google"
              width={22}
              height={22}
              size={24}
              color={Colors.white}
            />
          );
        } else if (item.category == "Instagram") {
          icon = (
            <FontAwesome
              name="instagram"
              width={35}
              height={35}
              color={Colors.white}
              size={24}
            />
          );
        }
        return (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <View style={styles.clockIconView}>{icon}</View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                alignItems: "center",
              }}
            >
              <View style={{ gap: 5 }}>
                <Text style={[styles.txt, { fontSize: 16, fontWeight: "600" }]}>
                  {item.category}
                </Text>
                <Text style={styles.txt}>{item.date}</Text>
              </View>
              <Text style={[styles.txt, { fontSize: 16, fontWeight: "600" }]}>
                ${item.amount}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginVertical: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: Colors.white,
  },
  clockIconView: {
    backgroundColor: Colors.grey,
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  clockIcon: {
    width: 22,
    height: 22,
    color: Colors.white,
  },
  txt: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default Spendings;
