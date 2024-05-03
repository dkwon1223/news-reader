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
        <h1 className="font-bold text-5xl text-indigo-600 mb-6">Recent News</h1>
        <section
        id="recentNewsContainer"
        className="h-[60vh] w-[95%] py-12 px-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:gap-x-8 overflow-y-auto border-4 rounded-xl border-indigo-600 shadow-2xl mb-12"
        >
            {recentNewsArticles}
        </section>
        <h1 className="font-bold text-5xl mb-6 text-indigo-600">Top Stories</h1>
        <section
        id="recentNewsContainer"
        className="h-[60vh] w-[95%] py-12 px-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:gap-x-8 overflow-y-auto border-4 rounded-xl border-indigo-600 shadow-2xl mb-12"
        >
            {recentNewsArticles}
        </section>
    </section>
  );
};

export default Home;
