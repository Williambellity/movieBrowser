import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Search section"
          onPress={() => this.props.navigation.navigate("Search")}
        />
      </View>
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
