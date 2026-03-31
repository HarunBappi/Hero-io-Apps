import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import loadingImage from '../../assets/logo.png'
const HomeLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            {navigation.state === "loading" && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          <img src={loadingImage} className="w-10 animate-spin" />
        </div>
      )}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;