import RightSideBar from "@/app/components/RightSideBar";
import Image from "next/image";
import Link from "next/link";

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const data = await res.json();
  const newsDetails = data.data[0];

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-10">
        <div className="rounded border border-gray-200 bg-white p-6 mt-4">
          <Image
            src={newsDetails.image_url}
            alt={newsDetails.title}
            width={900}
            height={600}
            className="h-90 w-full rounded-md object-cover"
          />
          <h1 className="mt-6 text-2xl font-bold leading-9 text-gray-800">
            {newsDetails.title}
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            {newsDetails.details}
          </p>

          <Link
            href={"/"}
            className="mt-6 inline-block bg-rose-600 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-rose-700"
          >
            ← All news category
          </Link>
        </div>
      </div>
      <div className="col-span-2">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetails;
