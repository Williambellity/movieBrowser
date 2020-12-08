import React from "react";
import {
  View,
  Text,
  StyleSheet,
  AppLoading,
  Button,
  SafeAreaView,
} from "react-native";
import SearchInput from "../searchInput";
import FilmFlatList from "../filmFlatList";
import { NavigationContainer } from "@react-navigation/native";
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
      result: new_data,
      keepSearching: result.Response === "True",
    }));
  };

  fetchMovies = async (search) => {
    this.props.navigation.setOptions({ title: search.title });
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
        <View style={styles.input}>
          <SearchInput onSubmit={this.fetchMovies} />
        </View>
        <FilmFlatList data={this.state.result} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  input: {
    // justifyContent: "center",
  },
});
