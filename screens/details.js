import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default class Details extends React.Component {
  handleRatings = () => {};
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ paddingLeft: 45, textAlign: "center" }}>
            Details of {this.props.route.params.Title} {"\n"}
          </Text>
          <Text>
            Internet Movie Database Ratings:{" "}
            {this.props.route.params.Ratings[0].Value}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 5,
  },
});
