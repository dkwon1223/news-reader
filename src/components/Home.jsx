import React from "react";
import ArticleContainer from "./ArticleContainer";
import { useState, useEffect } from "react";
import { articles } from "../mockData";
import Card from "./Card";

const Home = () => {

  const [recentNewsArticles, setRecentNewsArticles] = useState([]);
  
  const todayDateString = new Date().toISOString().slice(0,10);
  let lastWeekDate = new Date(todayDateString);
  lastWeekDate.setDate(lastWeekDate.getDate() -7);
  const lastWeekDateString = lastWeekDate.toISOString().slice(0, 10);
  
  
  const fetchRecentNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=news&from=${lastWeekDateString}&to=${todayDateString}&sortBy=popularity&page=1&pageSize=60&apiKey=${import.meta.env.VITE_API_KEY}`);
      if(!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      const articles = data.articles
      const filteredArticles = articles.filter((article) => {
        return article.content != "[Removed]"
      })
      console.log(filteredArticles);
      setRecentNewsArticles(filteredArticles);
    } catch(error) {
      console.log(Error, error);
    } 
  }
  
  useEffect(() => {
    fetchRecentNews();
  }, [])
  
  const recentNewsArticlesConverted = recentNewsArticles.map((article, index) => {
    return (
        <Card
            key={article.title} 
            id={index}
            title={article.title}
            image={article.urlToImage}
            description={article.description}
            date={article.publishedAt}
        />
    )
  });

  return (
    <section className="h-full py-12">
        <ArticleContainer title="Recent News" articles={recentNewsArticlesConverted} height="100" />
    </section>
  );
};

export default Home;
