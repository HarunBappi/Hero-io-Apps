import React, { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const Installation = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApp(data);
  }, []);

  // Convert Million Function
  const formateMillion = (num) => {
    return (num / 100000).toFixed(1) + "M";
  };

  //   handle UnInstall Button
  const handleUninstall = (id) => {
    const removeApp = installedApp.find((app) => app.id === id);
    const update = installedApp.filter((app) => app.id !== id);
    setInstalledApp(update);
    localStorage.setItem("installedApps", JSON.stringify(update));
    toast.warning(`${removeApp.title} Uninstall successfully `);
  };
  //   Sort Impliment
  const handleSort = (type) => {
    setSort(type);
    if (type === "High-Low") {
      const sortedByHighLow = installedApp.sort(
        (a, b) => b.downloads - a.downloads,
      );
      setInstalledApp(sortedByHighLow);
    }
    if (type === "Low-High") {
      const sortedBylowhigh = installedApp.sort(
        (a, b) => a.downloads - b.downloads,
      );
      setInstalledApp(sortedBylowhigh)
    }
  };
  return (
    <div className="w-11/12 mx-auto py-5">
      <Helmet>
              <title>Hero io | Installation</title>
        </Helmet>
      <h1 className="text-2xl font-bold mb-2 text-center">
        Your Installed Apps
      </h1>
      <p className="text-gray-400 text-xs text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">
              ({installedApp.length}) App Found
            </h1>
          </div>
          <div>
            <details className="dropdown">
              <summary className="btn m-1">
                Sort By
                <IoIosArrowDown></IoIosArrowDown>
                {sort ? sort : ""}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={() => handleSort("High-Low")}>High-Low</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Low-High")}>Low-High</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        {installedApp.length > 0 ? (
          <div className="flex flex-col mt-10 gap-4">
            {installedApp.map((app) => (
              <div key={app.id} className="bg-white rounded shadow w-full">
                <div className="flex p-3 justify-between flex-col gap-3 md:flex-row md:gap-0">
                  {/* Image, Title and 3 Items of Download, rating and Size */}
                  <div className="flex gap-5 flex-col md:flex-row">
                    <div>
                      <img
                        className="w-full md:w-20 rounded"
                        src={app.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-sm md:text-2xl font-semibold">
                        {app.title}
                      </h1>
                      {/* 3 Items of Download, rating and Size */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex gap-1 items-center">
                          <MdOutlineFileDownload className="text-green-500 text-sm"></MdOutlineFileDownload>
                          <h1 className="font-semibold text-xs">
                            {formateMillion(app.downloads)}
                          </h1>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaStar className="text-orange-500 text-sm"></FaStar>
                          <h1 className="font-semibold text-xs">
                            {app.ratingAvg}
                          </h1>
                        </div>
                        <div>
                          <h2 className="text-gray-400 text-xs font-semibold">
                            {app.size} MB
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="btn text-white bg-[#00D390]"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No Installed Apps</p>
        )}
      </div>
    </div>
  );
};

export default Installation;
