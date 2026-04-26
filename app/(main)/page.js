import Image from "next/image";
import AllCategories from "../components/AllCategories";
import RightSideBar from "../components/RightSideBar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const { news_category } = await getCategories();

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-2">
        <h2 className="text-2xl font-semibold">All Categories</h2>
        <AllCategories news_category={news_category} />
      </div>
      <div className="col-span-8">
        <h2 className="text-2xl font-semibold">All News</h2>
      </div>
      <div className="col-span-2">
        <h2 className="text-2xl font-semibold"> Social Icons</h2>
        <RightSideBar />
      </div>
    </div>
  );
}
