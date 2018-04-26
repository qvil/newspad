import React from "react";
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import Article from "components/Article";
import { getNews } from "lib/news";

export default class App extends React.Component {
  state = {
    articles: [],
    isLoadded: false,
    refreshing: true
  };

  componentDidMount() {
    // this.fetchNews(); // Original
    setTimeout(() => this.fetchNews(), 1000); // Loading Test
  }

  fetchNews = () => {
    getNews()
      .then(articles =>
        this.setState({ articles, refreshing: false, isLoadded: true })
      )
      .catch(() => this.setState({ refreshing: false, isLoadded: true }));
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => this.fetchNews());
  };

  render() {
    const { articles, refreshing, isLoadded } = this.state;
    const { handleRefresh } = this;

    return (
      <View style={styles.container}>
        {!isLoadded ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
