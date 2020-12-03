import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Row from "./Row";

export default class FilmFlatList extends React.Component {
  renderItem = ({ item }) => <Row {...item} />;

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.imdbid}
      />
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
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    minWidth: 20,
    marginHorizontal: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});
