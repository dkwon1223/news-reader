import React from "react";
import { articles, articles2 } from "../mockData";
import Card from "./Card";
import ArticleContainer from "./ArticleContainer";

const Home = () => {
  const recentNewsArticles = articles.map((article, index) => {
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
  const topNewsArticles = articles2.map((article, index) => {
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
    <section className="flex flex-col items-center py-12">
        <ArticleContainer title="Recent News" articles={recentNewsArticles} height="60vh" />
        <ArticleContainer title="Top Stories" articles={topNewsArticles} height="60vh" />
    </section>
  );
};

export default Home;
