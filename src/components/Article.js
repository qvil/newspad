import React from "react";
import { Text } from "react-native";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return <Text>{title}</Text>;
  }
}

export default Article;
