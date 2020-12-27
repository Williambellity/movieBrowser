import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  AccessibilityInfo,
  TouchableOpacity
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import Star from "react-native-star-view";
import {connect} from 'react-redux'

class Details extends React.Component {
  state = {
    film: this.props.route.params
  }
  handleRatings = (value) => {
    const int_value = parseFloat(value.split("/")[0]);
    return int_value / 2;
  };

  toggleFavorite = () => {
    //action redux
    const action ={type: "TOGGLE_FAVORITE", value: this.state.film}
    this.props.dispatch(action)
  }

  componentDidUpdate() {
    
  }
  
  displayFavoriteImage = () => {
    var sourceImage = require('../images/ic_favorite_border.png')
    if (this.props.favoritesFilm.findIndex(item => item.imdbID === this.state.film.imdbID) !== -1){
      sourceImage = require('../images/ic_favorite.png')
    }
    return (
      <Image
      source={sourceImage}
      style={styles.favoriteImage}
      />
    )
  }

  render() {
    
    const p = this.props.route.params;
    const rating = this.handleRatings(p.Ratings[0].Value);
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.favorite_container}
        onPress={this.toggleFavorite} >
          {this.displayFavoriteImage()}
          </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: this.props.route.params.Poster.toString() }}
            style={{
              width: 100,
              height: 150,
              alignSelf: "center",
              marginRight: 5,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <View style={styles.blocTextTopRight}>
              <Text style={{ fontWeight: "bold" }}>Title: </Text>
              <Text>{p.Title}</Text>
            </View>
            <View style={styles.blocTextTopRight}>
              <Text style={{ fontWeight: "bold" }}>By: </Text>
              <Text>{p.Director}</Text>
            </View>
            <View style={styles.blocTextTopRight}>
              <Text style={{ fontWeight: "bold" }}>With: </Text>
              <Text>{p.Actors}</Text>
            </View>
            <View style={styles.blocTextTopRight}>
              <Text style={{ fontWeight: "bold" }}>Genre: </Text>
              <Text>{p.Genre}</Text>
            </View>
            <View style={styles.blocTextTopRight}>
              <Text style={{ fontWeight: "bold" }}>Country: </Text>
              <Text>{p.Country}</Text>
            </View>
            <View style={styles.blocTextTopRight}>
              <Text style={{ fontWeight: "bold" }}>Date: </Text>
              <Text>{p.Released}</Text>
            </View>
          </View>
        </View>
        <Star score={parseFloat(rating)} style={styles.starStyle} />
        <View style={{ flexDirection: "row", marginRight: 51 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Plot: </Text>
          <Text style={{ fontSize: 15 }}>{p.Plot}</Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 60 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Awards: </Text>
          <Text style={{ fontSize: 15 }}>{p.Awards}</Text>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  // specifiez les données qui nous interessent

  return {
    favoritesFilm: state.favoritesFilm
  }
}
export default connect(mapStateToProps)(Details)

const styles = StyleSheet.create({
  favorite_container: {
    alignItems:'center'
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 5,
    backgroundColor: "#fff",
    flex: 1,
  },
  movieTitle: {
    paddingLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20,
  },
  blocTextTopRight: {
    flexDirection: "row",
    marginRight: 200,
  },
  favoriteImage: {
    width: 40,
    height: 40,
  }
});
