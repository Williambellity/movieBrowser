import React from "react";
import { StyleSheet, FlatList, View, Button } from "react-native";
import Row from "./Row";
import Details from "./Details";

export default class FilmFlatList extends React.Component {
  state = {
    showDetails: false,
    details: [],
  };

  handleTouchAMovie = async (imdbID) => {
    this.setState({
      details: [],
    });
    console.log(imdbID);
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=4e972569`
    );
    const result = await response.json();
    console.log(result);
    this.setState({
      showDetails: true,
      details: result,
      imdbID: imdbID,
    });
  };

  handleGoBack = () => {
    this.setState({
      showDetails: false,
    });
  };

  renderItem = ({ item }) => <Row {...item} onTouch={this.handleTouchAMovie} />;

  render() {
    if (!this.state.showDetails) {
      return (
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.imdbID}
        />
      );
    } else {
      return <Details {...this.state.details} goBack={this.handleGoBack} />;
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
