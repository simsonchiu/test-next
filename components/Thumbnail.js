import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

function Thumbnail({ result }) {
  const BASE_URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
  const image_url = `${BASE_URL}${result.poster_path}`;
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${image_url}`}
        width={600}
        height={900}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>

        {/* Check if media type exists first before displaying */}
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} `}{" "}
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;