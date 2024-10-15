import { View, Text, Platform } from "react-native";
import { StyleSheet } from "react-native";

function MealScreen({ route }) {
  return (
    <View style={styles.mealItem}>
      <Text>This is Meal - {route.params.catId}</Text>
    </View>
  );
}

export default MealScreen;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black", // ios box border
    shadowOpacity: 0.25, // ios box border
    shadowOffset: { width: 0, height: 2 }, // ios box border
    shadowRadius: 8, // ios box border
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
