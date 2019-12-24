import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Colors from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FavoriteScreen from "../screens/FavoritesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FilterScreen from "../screens/FiltersScreen";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle : {
    //   fontFamily: 'open-sans-bold'
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};
const MealsNavigator = createStackNavigator(
  {
    Category: {
      screen: CategoriesScreen
    },
    CategoriesMeal: {
      screen: CategoryMealsScreen
    },
    MealDetails: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);

const favNavigatorStack = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetails: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);
const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favorite: {
    screen: favNavigatorStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const MealFavTabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      })
    : createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilterScreen
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);

const drawerNavigation = createDrawerNavigator({
  MealsFav: {
      screen : MealFavTabNavigator,
    navigationOptions: {
        drawerLabel : "Meals"
    }},
  Filters: FiltersNavigator
},{
    contentOptions : {
        activeTintColor : Colors.accentColor,
        
    }
});
export default createAppContainer(drawerNavigation);
