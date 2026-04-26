"use client";

import { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import RightSideBar from "../components/RightSideBar";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [newsCategory, setNewsCategory] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setNewsCategory(data.data.news_category));

    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((data) => setNews(data.data));
  }, []);

  const handleLoadNewsByCategory = async (category_id) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
    const data = await res.json();
    setNews(data.data);
  };

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-2">
        <h2 className="text-2xl font-semibold">All Categories</h2>
        <AllCategories
          news_category={newsCategory}
          handleLoadNewsByCategory={handleLoadNewsByCategory}
        />
      </div>

      <div className="col-span-8 w-full">
        <h2 className="text-2xl font-semibold">All News</h2>

        <div className="mt-4">
          {news.map((item) => (
            <NewsCard key={item._id} news={item} />
          ))}
        </div>
      </div>

      <div className="col-span-2">
        <h2 className="text-2xl font-semibold">Social Icons</h2>
        <RightSideBar />
      </div>
    </div>
  );
}