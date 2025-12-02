import Colors from "@/constants/color";
import { ExpenseType } from "@/types";
import { Feather } from "@expo/vector-icons";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Expense = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const staticItem = [{ name: "AddItem" }];
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: "#666",
              borderStyle: "dashed",
              marginRight: 20,
              borderRadius: 10,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    }
    let amount = item.amount?.split(".");
    return (
      <View style={styles.expenseBlock}>
        <Text style={[styles.expenseBlockTxt1]}>{item.name}</Text>
        <Text style={[styles.expenseBlockTxt1]}>
          {amount ? amount[0] : 0}.
          <Text style={styles.expenseBlockTxt2Span}>
            {" "}
            {amount ? amount[1] : 0}{" "}
          </Text>
        </Text>
        <View style={styles.expenseBlockView3}>
          <Text style={styles.expenseBlockTxt1}>{item.percentage}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 100,
    padding: 15,
    paddingVertical: 20,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlockView3: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 25,
  },
});
export default Expense;
