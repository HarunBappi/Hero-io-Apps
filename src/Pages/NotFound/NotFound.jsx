import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate()
    return (
         <div>
       <Helmet>
              <title>Hero io | 404</title>
        </Helmet>
      <div className="w-11/12 mx-auto rounded-xl p-6 flex flex-col justify-center items-center bg-gray-100 mt-6 mb-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
      </div>
        <button onClick={()=> navigate(-1)} className='btn bg-warning mt-3 text-white'>
            Go Back
        </button>
    </div>
    </div>
    );
};

export default NotFound;