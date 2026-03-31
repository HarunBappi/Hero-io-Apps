import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";
import loadingImage from "../../assets/logo.png";
import { Helmet } from "react-helmet-async";
const Apps = () => {
  const apps = useLoaderData();
  //  Search Functionality
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const searchFilter = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTitle.toLowerCase()),
  );

  return (
    <div className="w-11/12 mx-auto py-5">
      <Helmet>
        <title>Hero io | All Apps</title>
      </Helmet>
      {/* Apps Found And Search Feild */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <h2 className="text-xl font-semibold">
          ({searchFilter.length}) Apps Found
        </h2>
        <div className="flex items-center">
          <CiSearch className="absolute ml-2"></CiSearch>
          <input
            type="text"
            placeholder="Search Apps"
            value={searchTitle}
            onChange={(e) => {
              setLoading(true);
              setSearchTitle(e.target.value);
              setTimeout(() => {
                setLoading(false);
              }, 100);
            }}
            className="border border-gray-200 rounded pl-8"
          />
        </div>
      </div>
      {/* All Apps Map */}
      {loading ? (
        <div className="flex justify-center items-center bg-white z-50">
          <img src={loadingImage} className="w-10 animate-spin" />
        </div>
      ) : searchFilter.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {searchFilter.map((app) => (
            <TrendingApps key={app.id} trending={app}></TrendingApps>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-500">No Data Found 😢</div>
      )}
    </div>
  );
};

export default Apps;
