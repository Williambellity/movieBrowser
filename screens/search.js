import React from "react";
import { View, Text, StyleSheet, AppLoading, Button } from "react-native";
import SearchInput from "../searchInput";
import FilmFlatList from "../filmFlatList";

export default class Search extends React.Component {
  state = {
    isReady: false,
    research: "",
    result: "",
  };

  fetchMovies = async (search) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search.title}&apikey=4e972569`
    );
    const result = await response.json();
    this.setState({
      isReady: result.Response === "True",
      result: result.Search,
    });
  };
  render() {
    this.fetchMovies.bind(this);
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <SearchInput onSubmit={this.fetchMovies} />
          <Text>Search screen</Text>
          <Text>No result</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SearchInput onSubmit={this.fetchMovies} />
          <Text>Search screen</Text>
          <FilmFlatList data={this.state.result} />
        </View>
      );
    }
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
