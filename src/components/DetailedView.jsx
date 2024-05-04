import React from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const DetailedView = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <section className="h-full w-full">
      <Nav />
      <article className="flex flex-col items-center justify-center py-6">
        <h1 className="text-3xl font-bold mb-4">
          {article.title} | {article.source.name}
        </h1>
        <h2 className="text-md font-bold mb-8">{article.author} | {Date(article.publishedAt)}</h2>
        <h3 className="mb-2 font-bold">{article.description}</h3>
        <div className="group aspect-h-4 aspect-w-10 block w-[80%] overflow-hidden rounded-lg">
          <img
            src={article.urlToImage === null ? NoImage : article.urlToImage}
            alt="article cover image"
            className="pointer-events-none object-cover"
          />
        </div>
        <p className="w-3/4 py-6">{article.content}</p>
        <p className="text-lg">Read the entire article <a className="font-bold text-blue-600" href={article.url}>here</a></p>
      </article>
    </section>
  );
};

export default DetailedView;
