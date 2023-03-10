import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const DEFAULT_IMAGE =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {restaurant.deliveryFee.toFixed(1)} &euro; &#8226;{" "}
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    marginRight: 1,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  subtitle: {
    color: "grey",
    marginHorizontal: 5,
  },
  row: { flexDirection: "row", alignItems: "center" },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
