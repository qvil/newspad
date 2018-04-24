import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
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

  render() {
    const { articles, refreshing } = this.state;

    console.log(articles);
    return (
      <View style={styles.container}>
        {refreshing ? <ActivityIndicator size="large" /> : null}
        {articles.map(article => (
          <Article key={article.title} title={article.title} />
        ))}
        {/* <Article /> */}
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
