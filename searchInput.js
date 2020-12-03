import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default class SearchInput extends React.Component {
  state = {
    title: "",
  };

  getHandler = (key) => {
    return (val) => {
      this.setState({ [key]: val });
    };
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    // console.log(this.state.title);
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={this.getHandler("title")} //onChangeText props
          textAlign="center"
        />
        <Button color="black" title="Search" onPress={this.handleSubmit} />
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
