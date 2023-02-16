import { FlatList, StyleSheet, Text, View } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "bold" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>{basketDish.price} &euro;</Text>
    </View>
  );
};

export default BasketDishItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 10,
  },
});
