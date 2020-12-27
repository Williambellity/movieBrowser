import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Row from "./Row";
import {connect} from 'react-redux'

class FilmFlatList extends React.Component {
  renderItem = ({ item }) => <Row {...item} favoritesFilm={this.props.favoritesFilm} />;

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.props.favoritesFilm}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    );
  }
}

mapStateToProps = (state) => {
  // specifiez les données qui nous interessent

  return {
    favoritesFilm: state.favoritesFilm
  }
}
export default connect(mapStateToProps)(FilmFlatList)

const styles = StyleSheet.create({
  container: {},
});
