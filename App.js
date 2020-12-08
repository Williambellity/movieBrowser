import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Search from "./screens/search";
import Details from "./screens/details";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
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
              headerTransparent: true,
              title: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
