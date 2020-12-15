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
        keyExtractor={(item) => item.imdbID}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
