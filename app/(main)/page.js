import Image from "next/image";

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
        <ul className="ml-4 mt-4 flex flex-col gap-2">
          {news_category.map((category) => (
            <li className="bg-slate-100 p-2 rounded-md" key={category.category_id}>{category.category_name}</li>
          ))}
        </ul>
      </div>
      <div className="col-span-7">
        <h2 className="text-2xl font-semibold">All News</h2>
      </div>
      <div className="col-span-3">
        <h2 className="text-2xl font-semibold"> Social Icons</h2>
      </div>
    </div>
  );
}
