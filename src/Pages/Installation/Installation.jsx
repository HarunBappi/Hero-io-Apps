import React, { useEffect, useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const Installation = () => {
    const [installedApp, setInstalledApp] = useState([])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApp(data)
    },[])

    // Convert Million Function
  const formateMillion = (num) => {
    return (num / 100000).toFixed(1) + "M";
  };
    return (
        <div className="w-11/12 mx-auto py-5">
      <h1 className="text-2xl font-bold mb-2 text-center">Your Installed Apps</h1>
      <p className='text-gray-400 text-xs text-center'>Explore All Trending Apps on the Market developed by us</p>

      <div className='mt-8'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-xl font-semibold'>{installedApp.length} App Found</h1>
            </div>
            <div>
                <button className='btn'>
                    sort by
                </button>
            </div>
        </div>
        {installedApp.length > 0 ? (
        <div className="flex flex-col mt-10 gap-4">
          {installedApp.map((app) => (
            <div key={app.id} className='bg-white rounded shadow w-full'>
                <div className='flex p-3 justify-between '>
                    {/* Image, Title and 3 Items of Download, rating and Size */}
                    <div className='flex gap-5'>
                        <div>
                            <img className='w-20 rounded' src={app.image} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>{app.title}</h1>
                            {/* 3 Items of Download, rating and Size */}
                            <div className='flex items-center gap-3 mt-2'>
                                <div className='flex gap-1 items-center'>
                                <MdOutlineFileDownload className="text-green-500 text-sm"></MdOutlineFileDownload>
                            <h1 className="font-semibold text-xs">{formateMillion(app.downloads)}</h1>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FaStar className="text-orange-500 text-sm"></FaStar>
                            <h1 className="font-semibold text-xs">{app.ratingAvg}</h1>
                            </div>
                            <div>
                                <h2 className='text-gray-400 text-xs font-semibold'>{app.size} MB</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn text-white bg-[#00D390]'>Uninstall</button>
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