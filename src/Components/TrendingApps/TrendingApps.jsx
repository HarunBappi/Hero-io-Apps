import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
const TrendingApps = ({ trending }) => {
  const { id, image, title, ratingAvg, downloads } = trending;
  // Convert Million Function
  const formateMillion = (num) => {
    return (num / 100000).toFixed(1) + "M";
  };
  return (
    <Link to={`/details/${id}`}>
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-2">
        <img src={image} alt={title} className="rounded-xl h-35 w-full" />
      </figure>
      <div className="px-2 space-y-2">
        <h2 className="text-[16px] font-semibold">{title}</h2>
        {/*download and ratting  button  */}
        <div className="flex justify-between pb-2">
          <button className="flex items-center bg-green-50 text-green-500 w-15 h-6 text-xs justify-center rounded gap-1">
            <MdOutlineFileDownload></MdOutlineFileDownload>
            {formateMillion(downloads)}
          </button>
          <button className="flex items-center bg-orange-50 text-orange-500 w-15 h-6 text-xs justify-center rounded gap-1">
            <FaStar></FaStar>
            {ratingAvg}
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TrendingApps;
