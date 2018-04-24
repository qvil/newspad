// import fetch from "fetch";
import config from "config/config.json";

export const API_KEY = config.apiKey;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function getNews(url) {
  try {
    let articles = await fetch(url).then(response => response);
    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}
