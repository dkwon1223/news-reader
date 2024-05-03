import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ArticleCategory from "./components/ArticleCategory.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
