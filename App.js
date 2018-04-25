import React from "react";
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import Article from "components/Article";
import { getNews } from "lib/news";

export default class App extends React.Component {
  state = {
    articles: [],
    refreshing: true
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => this.fetchNews());
  };

  render() {
    const { articles, refreshing } = this.state;
    const { handleRefresh } = this;

    console.log(articles);
    return (
      <View style={styles.container}>
        {/* {refreshing ? <ActivityIndicator size="large" /> : null} */}
        <FlatList
          data={articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
