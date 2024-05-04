import React from "react";

const ArticleContainer = ({ title, articles, height }) => {
  return (
    <section className={`flex flex-col items-center max-h-[${height}vh]`}>
      <h1 className="font-bold text-5xl text-indigo-600 mb-6">{title}</h1>
      <section
        id={`${title.replace(" ", "")}Container`}
        className={`h-auto w-[95%] py-12 px-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:gap-x-8 overflow-y-auto border-4 rounded-xl border-indigo-600 shadow-2xl mb-12`}
      >
        {articles}
      </section>
    </section>
  );
};

export default ArticleContainer;
