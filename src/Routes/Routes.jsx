import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDeatails/AppDetails";
import NotFound from "../Pages/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/hero-io.json"),
      },
      {
        path: "apps",
        loader: () => fetch("/hero-io.json"),
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/hero-io.json"),
        Component: AppDetails,
      },
    ],
  },
]);

export { router };
