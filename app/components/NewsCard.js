import Image from "next/image";
import { Bookmark, Share2, Eye, Star } from "lucide-react";

export default function NewsCard({ news }) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded border border-gray-200 bg-white">
      {/* Author */}
      <div className="flex items-center justify-between bg-gray-100 px-5 py-4">
        <div className="flex items-center gap-4">
          <Image
            src={news.author.img}
            alt={news?.author?.name || "Author image"}
            width={45}
            height={45}
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>
            <h3 className="text-base font-bold text-gray-700">
              {news.author.name}
            </h3>
            <p className="text-sm text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <Bookmark size={22} />
          <Share2 size={22} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-5 text-xl font-bold leading-8 text-gray-700">
          {news.title}
        </h2>

        <Image
          src={news.image_url}
          alt="News image"
          width={520}
          height={260}
          className="mb-6 h-64 w-full rounded-md object-cover"
        />

        <p className="mb-1 text-base leading-7 text-gray-500">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Russia, Security, UK, Ukraine, United
          States, Worthy News (Worthy News) – U.S. President Joe Biden has
          announced nearly $3 billion in new U.S. military a...
        </p>

        <button className="mb-6 font-semibold text-orange-500">
          Read More
        </button>

        <hr className="mb-5 border-gray-200" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              <Star size={22} fill="currentColor" />
              <Star size={22} fill="currentColor" />
              <Star size={22} fill="currentColor" />
              <Star size={22} fill="currentColor" />
              <Star size={22} fill="currentColor" />
            </div>
            <span className="text-gray-600">4.9</span>
          </div>

          <div className="flex items-center gap-3 text-gray-500">
            <Eye size={22} fill="currentColor" />
            <span>499</span>
          </div>
        </div>
      </div>
    </div>
  );
}
