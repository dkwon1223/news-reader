import React from "react";
import { articles } from "../mockData";
import Card from "./Card";

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
        <h1 className="font-bold text-6xl">Recent News</h1>
        <section
        id="recentNewsContainer"
        className="h-[90%] w-full py-12 px-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:gap-x-8"
        >
            {recentNewsArticles}
        </section>
    </section>
  );
};

export default Home;
