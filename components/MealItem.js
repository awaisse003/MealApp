import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.backgroundImage }}
            >
              <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m </Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",

  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius : 10,
    overflow : 'hidden',
    marginVertical:10
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    height : '15%'
  },
  title: {
    fontSize: 20,
    color: "white",
    fontFamily: "open-sans-bold",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign:"center"
  }
});

export default MealItem;
