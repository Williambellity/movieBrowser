import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default class SearchButton extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleNavigation = () => {
    this.props.nav.navigate("Search");
  };
  render() {
    return (
      <View style={styles.buttonSSR}>
        <TouchableOpacity onPress={this.handleNavigation}>
          <View style={styles.buttonStart}>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStart: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 120,
    height: 60,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 30,
    color: "#dc143c",
  },
  buttonSSR: {
    padding: 10,
  },
});
