import React from "react";
import ArticleContainer from "./ArticleContainer";
import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";

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
        return article.content != "[Removed]" && article.urlToImage != null
      })
      setRecentNewsArticles(filteredArticles);
    } catch(error) {
      console.log(Error, error);
    } 
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetchRecentNews();
    }, 1500)
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
        {recentNewsArticles.length > 0 ? <ArticleContainer title="Recent News" articles={recentNewsArticlesConverted} /> : <Loading />}
    </section>
  );
};

export default Home;
