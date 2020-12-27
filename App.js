import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Search from "./screens/search";
import Details from "./screens/details";
import Favorites from "./screens/favorites";
import { Provider } from "react-redux";
import Store from "./store/configureStore";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#dc143c",
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                title: "Search",
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{
                title: "Details",
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{
                title: "Favorites",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
