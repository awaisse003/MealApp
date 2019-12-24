import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import { DrawerActions } from "react-navigation-drawer";

const FavoriteScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.id === "m1" || meal.id === "m2"
  );
  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};
FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: "Favorite Meals ",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoriteScreen;
