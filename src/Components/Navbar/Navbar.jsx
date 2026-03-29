import React from "react";
import { Link, NavLink } from "react-router";
import logoImage  from "../../assets/logo.png"
import { FaSquareGithub } from "react-icons/fa6";
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Apps",
      path: "/apps",
    },
    {
      name: "Installation",
      path: "/installation",
    },
  ];

  //   Active Class

  const activeClass = ({ isActive }) =>
    isActive ? "gradient-color font-bold uppercase underline" : "";

  // map navItems
  const navLinks = () => 
    navItems.map((link) => (
      <li key={link.path}>
        <NavLink to={link.path} className={activeClass}>
          {link.name}
        </NavLink>
      </li>
    ));
  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-full md:w-11/12 mx-auto flex justify-between items-center ">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks()}
          </ul>
        </div>
        <Link to='/'>
        <div className="flex items-center justify-center gap-2">
            <img className="w-10 h-10" src={logoImage} alt="" />
        <h2 className="gradient-color">HERO.IO</h2>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks()}</ul>
      </div>
      <div className="navbar-end">
        <a href='https://github.com/HarunBappi/Hero-io-Apps' target="_blank">
         <button className="flex items-center justify-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] pl-2 pr-2 rounded text-white">
            <FaSquareGithub></FaSquareGithub>
            <p>Contribute</p>
         </button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
