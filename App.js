import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "components/Data";
import { API_KEY } from "lib/news";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Data />
        <Text>{API_KEY}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
