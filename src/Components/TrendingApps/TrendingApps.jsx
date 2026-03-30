import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const TrendingApps = ({ trending }) => {
  const app = trending;
  console.log(app);
  const { image, title, ratingAvg, downloads } = app;
  const formateMillion = (num) =>{
    return (num / 100000).toFixed(1) + "M"
  }
  return (
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
  );
};

export default TrendingApps;
