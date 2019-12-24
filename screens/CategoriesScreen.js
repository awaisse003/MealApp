import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import { DrawerActions } from "react-navigation-drawer";

const CategoriesScreen = props => {
  const renderListItem = itemData => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }
    return (
      <View style={styles.gridItem}>
        <TouchableCmp
          style={{ flex: 1 }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "CategoriesMeal",
              params: { categoryId: itemData.item.id }
            });
          }}
        >
          <View
            style={{
              ...styles.container,
              ...{ backgroundColor: itemData.item.color }
            }}
          >
            <Text style={styles.title}>{itemData.item.title}</Text>
          </View>
        </TouchableCmp>
      </View>
    );
  };
  //   console.log(props)
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderListItem}
      numColumns={2}
    />
  );
};


CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Meal Categories",
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
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    overflow: "hidden",
    borderRadius: 10
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right"
  }
});

export default CategoriesScreen;
