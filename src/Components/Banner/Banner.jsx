import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../../assets/hero.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div>
      <div className="w-11/12 md:w-8/12 mx-auto pt-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl  md:text-4xl/10 lg:text-5xl/14 text-center md:font-bold md:w-4/7 md:mx-auto">
            We Build <span className="gradient-color">Productive</span> Apps
          </h1>
          <p className="text-justify md:text-center text-xs text-gray-400 leading-relaxed">
            At <span className="gradient-color">HERO.IO</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting.Our goal is to turn your ideas into digital
            experiences that truly make an impact.
          </p>
          <div className="flex justify-center items-center gap-3">
            <a href="https://play.google.com/store/apps" target="_blank">
             <button className="flex btn">
              <FaGooglePlay></FaGooglePlay>
              <h3>Google Play</h3>
            </button>
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <button className="btn flex">
              <FaAppStoreIos></FaAppStoreIos>
              <h3>App Store</h3>
            </button>
            </a>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white p-5">
        <h2 className="md:text-3xl font-semibold text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-20 mt-5 space-y-4 md:space-y-0">
          <div className="space-y-1">
            <p className="text-xs text-gray-400">Total Downloads</p>
            <h1 className="text-3xl font-bold">29.6M</h1>
            <p className="text-xs text-gray-400">21% more than last month</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-gray-400">Total Reviews</p>
            <h1 className="text-3xl font-bold">906K</h1>
            <p className="text-xs text-gray-400">46% more than last month</p>
          </div>
          <div className="space-y-1 -ml-10">
            <p className="text-xs text-gray-400">Active Apps</p>
            <h1 className="text-3xl font-bold">132+</h1>
            <p className="text-xs text-gray-400">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
