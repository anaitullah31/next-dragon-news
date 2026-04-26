"use client";
import Link from "next/link";

const AllCategories = ({ news_category, handleLoadNewsByCategory }) => {
  return (
    <ul className="ml-4 mt-4 flex flex-col gap-2">
      {news_category.map((category) => (
        <li
          className={`bg-slate-100 p-2 rounded-md`}
          key={category.category_id}
        >
          <button
            className="cursor-pointer w-full"
            onClick={() => handleLoadNewsByCategory(category.category_id)}
          >
            {category.category_name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AllCategories;
