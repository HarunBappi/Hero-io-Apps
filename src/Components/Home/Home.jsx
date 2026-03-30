import React from "react";
import Banner from "../Banner/Banner";
import TrendingApps from "../TrendingApps/TrendingApps";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const allApps = useLoaderData();
  const trendingApps = allApps.slice(0, 8);

  return (
    <div className="bg-gray-50">
      <Banner></Banner>
      <div className="w-11/12 mx-auto border-green-400 mt-8 space-y-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Trending Apps</h1>
          <p className="text-gray-400 text-xs mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* Trending Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {trendingApps.map((trending) => (
            <TrendingApps key={trending.id} trending={trending}></TrendingApps>
          ))}
        </div>
        {/* All Apps button */}
        <div className="flex justify-center items-center pb-5">
            <Link to='/apps'>
         <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] pl-3 pr-3 pt-1 pb-1 rounded text-white">All Apps</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
