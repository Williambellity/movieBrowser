import React from "react";
import { View, StyleSheet } from "react-native";
import SearchInput from "../searchInput";
import FilmFlatList from "../filmFlatList";
import { connect } from "react-redux";

class Favorites extends React.Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <FilmFlatList data={this.props.favoritesFilm} />
      </View>
    );
  }
}
mapStateToProps = (state) => {
  // specifiez les données qui nous interessent

  return {
    favoritesFilm: state.favoritesFilm,
  };
};
export default connect(mapStateToProps)(Favorites);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
});
