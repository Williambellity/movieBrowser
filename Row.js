import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class Row extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    console.log("props title");
    console.log(this.props.Title);
    return (
      <View style={styles.row}>
        <Text>{this.props.Title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
});
