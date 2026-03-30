import React, { use } from "react";
import { CiSearch } from "react-icons/ci";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
const Apps = ({allApps}) => {
   const Apps = use(allApps)
  return (
    <div className="w-11/12 mx-auto py-5">
      {/* Apps Found And Search Feild */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <h2 className="text-xl font-semibold">({Apps.length}) Apps Found</h2>
        <div className="flex items-center">
          <CiSearch className="absolute ml-2"></CiSearch>
          <input
            type="text"
            placeholder="Search Apps"
            className="border border-gray-200 rounded pl-8"
          />
        </div>
      </div>
      {/* All Apps Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {Apps.map((app) => (
          <TrendingApps key={app.id} trending={app}></TrendingApps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
