import ArticleContainer from "./ArticleContainer";
import Nav from "./Nav";
import Card from "./Card";
import { articles } from "../mockData";

const ArticleCategory = ({ category }) => {
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
  
  return (
    <>
      <Nav />
      <section
        id={`${category.replace(category.charAt(0), category.charAt(0).toUpperCase())}Section`}
        className="flex flex-col items-center py-12"
      >
        <ArticleContainer title={category.replace(category.charAt(0), category.charAt(0).toUpperCase())} articles={recentNewsArticles} height="5"/>
      </section>
    </>
  );
};

export default ArticleCategory;
