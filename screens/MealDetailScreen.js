import React from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
  const catid = props.navigation.getParam("categoryId");
  const selectedMeal = MEALS.find(cat => cat.id === catid);
  //   title = selectedCategory.title;
  return (
    <ScrollView style={styles.screen}>
      <Image
        style={{ width: "100%", height: 300 }}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
        <Text>{selectedMeal.duration}m </Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text style={styles.item} key={ingredient}>
          . {ingredient}
        </Text>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text style={styles.item} key={step}>
          . {step}
        </Text>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  let id = navigationData.navigation.getParam("categoryId");
  const selectedMeal = MEALS.find(cat => cat.id === id);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log("item is fav");
          }}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding : 10
  },
 
  screen: {
    flex: 1
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  item:{
      marginVertical : 10,
      marginHorizontal : 20 , 
      borderColor : '#ccc' , 
      borderWidth : 1,
      padding : 10
  }
});

export default MealDetailScreen;
