import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import SearchButton from "./searchButton";
import { SearchBar } from "react-native-elements";

export default class SearchInput extends React.Component {
  state = {
    title: "",
  };

  getHandler = (key) => {
    // this.search.focus();
    return (val) => {
      this.setState({ [key]: val });
    };
  };
  handleSubmit = () => {
    Keyboard.dismiss();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <View>
        <SearchBar
          ref={(search) => (this.search = search)}
          onChangeText={this.getHandler("title")}
          placeholder="Type to start"
          searchIcon={{ size: 40, onPress: this.handleSubmit }}
          value={this.state.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
