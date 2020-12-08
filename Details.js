import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default class Details extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <Button
          title={"Go back to search results"}
          onPress={this.props.goBack}
        />
        <Text>Details of {this.props.Title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
