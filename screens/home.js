import React from "react";
import { View, StyleSheet } from "react-native";
import SearchButton from "../searchButton";
import FavoriteButton from "../favoriteButton";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchButton nav={this.props.navigation} />
        <FavoriteButton nav={this.props.navigation} />
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
