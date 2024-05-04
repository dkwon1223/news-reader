import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ArticleCategory from "./components/ArticleCategory.jsx";
import Loading from "./components/Loading.jsx";
import DetailedView from "./components/DetailedView.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sports" element={<ArticleCategory category="sports" />} />
        <Route
          path="/business"
          element={<ArticleCategory category="business" />}
        />
        <Route
          path="/technology"
          element={<ArticleCategory category="technology" />}
        />
        <Route path="/health" element={<ArticleCategory category="health" />} />
        <Route path="/article" element={<DetailedView />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
