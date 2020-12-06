import React from "react";
import { View, Text, StyleSheet, AppLoading, Button } from "react-native";
import SearchInput from "../searchInput";
import FilmFlatList from "../filmFlatList";
// import researchAPI from "../API";

export default class Search extends React.Component {
  state = {
    keepSearching: true,
    result: [],
  };

  researchAPI = async (title, pgnumber) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${title}&page=${pgnumber}&apikey=4e972569`
    );
    const result = await response.json();

    const new_data = this.state.result.concat(result.Search);

    this.setState((prevState) => ({
      isReady: result.Response === "True",
      result: new_data,
      keepSearching: result.Response === "True",
    }));
  };

  fetchMovies = async (search) => {
    // Formatage du titre en word1+word2+..
    const title = search.title.split(" ").join("+");
    // New research => result = []
    this.setState({
      result: [],
    });

    // First research to know how many page I need to show
    const response = await fetch(
      `http://www.omdbapi.com/?s=${title}&page=1&apikey=4e972569`
    );
    const result = await response.json();
    this.setState((prevState) => ({
      result: result.Search,
      keepSearching: result.Response === "True",
    }));
    const totalResults = +result.totalResults;
    let pagenumber = 2;
    while (pagenumber <= totalResults / 10) {
      this.researchAPI(title, pagenumber.toString());
      pagenumber += 1;
    }
  };

  render() {
    this.fetchMovies.bind(this);

    return (
      <View style={styles.container}>
        <SearchInput onSubmit={this.fetchMovies} />
        <FilmFlatList data={this.state.result} />
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
