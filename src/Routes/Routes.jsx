import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import Installation from "../Pages/Installation/Installation";
import Details from "../Pages/Deatails/Details";
import { Suspense } from "react";
import lodingImage from "../assets/logo.png";
import Apps from "../Pages/Apps/Apps";

const allApps = fetch("/hero-io.json").then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/hero-io.json"),
      },
      {
        path: "apps",
        element: <Suspense fallback={
          <div className="flex justify-center items-center h-40">
                <img src={lodingImage} alt="loading" className="w-10 h-10 animate-spin" />
                <p>Loading...</p>
              </div>
        }> <Apps allApps={allApps}></Apps>
          
        </Suspense> ,
        
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "details",
        Component: Details,
      },
    ],
  },
]);

export { router };
