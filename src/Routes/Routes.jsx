import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import TrendingApps from "../Components/TrendingApps/TrendingApps";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/hero-io.json")
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);

export { router };
