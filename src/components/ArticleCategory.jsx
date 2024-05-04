import ArticleContainer from "./ArticleContainer";
import Nav from "./Nav";
import Card from "./Card";
import Loading from "./Loading";
import { useState, useEffect } from "react";


const ArticleCategory = ({ category }) => {
  const [articlesByCategory, setArticlesByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchNewsByCategory = async (category) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=1&pageSize=60&apiKey=${import.meta.env.VITE_API_KEY}`);
      if(!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      const articles = data.articles
      const filteredArticles = articles.filter((article) => {
        return article.content != "[Removed]" && article.urlToImage != null
      })
      setArticlesByCategory(filteredArticles);
    } catch(error) {
      console.log(Error, error);
    } 
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetchNewsByCategory(category);
    }, 500)
  }, [category])

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 1500)
  }, [category])

  const articlesByCategoryConverted = articlesByCategory.map((article, index) => {
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
      {!loading ? <section
        id={`${category.replace(category.charAt(0), category.charAt(0).toUpperCase())}Section`}
        className="flex flex-col items-center py-12"
      >
        <ArticleContainer title={category.replace(category.charAt(0), category.charAt(0).toUpperCase())} articles={articlesByCategoryConverted} height="5"/>
      </section> : <Loading />}
    </>
  );
};

export default ArticleCategory;
