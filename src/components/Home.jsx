import React from "react";
import { articles } from "../mockData";
import Card from "./Card";
import ArticleContainer from "./ArticleContainer";

const Home = () => {
  const recentNewsArticles = articles.map((article, index) => {
    return (
        <Card 
            id={index}
            title={article.title}
            image={article.urlToImage}
            description={article.description}
            date={article.publishedAt}
        />
    )
  });

  return (
    <section className="flex flex-col items-center py-6">
        <ArticleContainer articles={recentNewsArticles} height="60"/>
        <ArticleContainer articles={recentNewsArticles} height="60"/>
    </section>
  );
};

export default Home;
