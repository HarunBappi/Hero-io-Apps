import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { getInstallApps, saveInstalledApps } from "../../JS/LocalStorage";
import { toast } from "react-toastify";
const AppDetails = () => {
  const { id } = useParams();
  const detailsApp = useLoaderData();

  const singleApp = detailsApp.find((app) => app.id === parseInt(id));
  const {
    image,
    title,
    description,
    companyName,
    ratingAvg,
    downloads,
    reviews,
    size,
    ratings,
  } = singleApp;

  // Convert Million Function
  const formateMillion = (num) => {
    return (num / 100000).toFixed(1) + "M";
  };

  //   Convert reviews function
  const formateReview = (num) => {
    return (num / 1000).toFixed(1) + "K";
  };

  // Insatall Apps Functionality in localStorage
  const [installedApps, setInstalledApps] = useState([])
  useEffect(()=>{
    const data = getInstallApps()
    setInstalledApps(data)
  },[])

  const isInstalled = installedApps.find((app) => app.id === singleApp.id);
  const handleInstallButton = () => {
    if (!isInstalled) {
      const updateApps = [...installedApps, singleApp];
      setInstalledApps(updateApps)
      saveInstalledApps(updateApps);
      toast.success(`${singleApp.title} Installed successfully `)
    }
  };
  return (
    <div className="bg-gray-50">
      <div className="w-11/12 mx-auto pt-8 pb-6">
        <div className="flex gap-5">
          <div>
            <img className="h-50 rounded" src={image} alt={title} />
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <div className="">
              <h1>{title}</h1>
              <p className="text-gray-400 text-xs">
                Developed By{" "}
                <span className="gradient-color">{companyName}</span>
              </p>
            </div>
            {/* 3 Items of Download, rating and reviews */}
            <div className="border-t border-gray-300 mt-4 flex flex-col md:flex-row gap-10 items-center">
              <div className="mt-5 flex flex-col gap-1">
                <MdOutlineFileDownload className="text-green-500 text-xl"></MdOutlineFileDownload>
                <p className="text-sm  text-gray-400">Downloads</p>
                <h1 className="font-bold">{formateMillion(downloads)}</h1>
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <FaStar className="text-orange-500 text-xl"></FaStar>
                <p className="text-sm  text-gray-400">Average rating</p>
                <h1 className="font-bold">{ratingAvg}</h1>
              </div>
              <div className="mt-5 flex flex-col gap-1">
                <AiTwotoneLike className="text-blue-400 text-xl"></AiTwotoneLike>
                <p className="text-sm  text-gray-400">Total Reviews</p>
                <h1 className="font-bold">{formateReview(reviews)}</h1>
              </div>
            </div>
            <button
              onClick={handleInstallButton}
              disabled={isInstalled}
              className={`btn mt-2 text-white ${isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"}`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        {/* Rating and Description */}
        <div>
          <div className="border-t border-gray-300 mt-5">
            <h1>Rating</h1>
            {ratings.map((rating, id) => (
              <div key={id}>
                <li>
                  {rating.name} - {rating.count}
                </li>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-300 mt-5">
            <h1 className="text-xl font-semibold mt-3">Description</h1>
            <p className="text-gray-400 text-xs mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
