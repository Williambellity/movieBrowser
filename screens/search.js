import React from "react";
import { View, Text, StyleSheet, AppLoading, Button } from "react-native";
import SearchInput from "../searchInput";
import FilmFlatList from "../filmFlatList";
// import researchAPI from "../API";

export default class Search extends React.Component {
  state = {
    isReady: false,
    research: "",
    keepSearching: true,
    result: [],
  };

  formatSearch = (text) => {
    const new_text = text.split(" ");
    const new_text_2 = new_text.join("+");
    return new_text_2;
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
    const title = this.formatSearch(search.title);
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
      isReady: result.Response === "True",
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

  // fetchMovies = async (search) => {
  //   const title = this.formatSearch(search.title);
  //   const response = await fetch(
  //     `http://www.omdbapi.com/?s=${search.title}&page=1&apikey=31f10d39`
  //   );
  //   const result = await response.json();

  //   this.setState({
  //     isReady: result.Response === "True",
  //     result: result.Search,
  //   });
  // };

  render() {
    this.fetchMovies.bind(this);
    // this.fetchMoreMovies.bind(this);
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
