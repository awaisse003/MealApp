import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

let title = "default";
const CategoryMealsScreen = props => {
  const catid = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catid);
  title = selectedCategory.title;

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catid) >= 0
  );
  return <MealList displayedMeals={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catid = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catid);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
