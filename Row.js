import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

class Row extends React.Component {
  handleTouchAMovie = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${this.props.imdbID}&plot=full&apikey=4e972569`
    );
    const result = await response.json();
    this.props.navigation.navigate("Details", { ...result });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleTouchAMovie}>
        <View style={styles.item}>
          <Image
            source={{ uri: this.props.Poster.toString() }}
            style={{ width: 80, height: 100 }}
          />
          <View>
            <View style={{ marginLeft: 5, marginRight: 80 }}>
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

export default function (props) {
  const navigation = useNavigation();

  return <Row {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: "row",
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
    paddingHorizontal: 1,
  },
});
