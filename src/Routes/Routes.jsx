import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import TrendingApps from "../Components/TrendingApps/TrendingApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
            path:"trendingapps",
            Component:TrendingApps
        }
    ]
  },
]);

export {router}