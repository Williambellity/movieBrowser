import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Row extends React.Component {
  handleOnPress = () => {
    this.props.onTouch(this.props.imdbID);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <View style={styles.item}>
          <Image
            source={{ uri: this.props.Poster.toString() }}
            style={{ width: 80, height: 100 }}
          />
          <View>
            <View style={{ marginLeft: 5, marginRight: 140 }}>
              <Text style={styles.movieTitle}>
                {this.props.Title}
                {"\n"}
              </Text>
            </View>
            <Text style={{ marginLeft: 5 }}>
              {this.props.Year + ", " + this.props.Type}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: "row",
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
    paddingHorizontal: 5,
    // lineHeight: 20,
  },
});
