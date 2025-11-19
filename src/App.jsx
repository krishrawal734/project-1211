import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Contect from "./component/Contect";
import Destinations from "./component/Destinations";
import Travelpackages from "./component/Travelpackages";
import Gallery from "./component/Gallery";
import Aboutus from "./component/Aboutus";
import Travelguides from "./component/Travelguides";
const Leyout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Leyout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contect />,
        },
         {
          path: "/Destinations",
          element: <Destinations />,
        },
         {
          path: "/Travelpackages",
          element: < Travelpackages/>,
        },
         {
          path: "/Aboutus",
          element: <Aboutus/>,
        },

        {
          path: "/Travelguides",
          element: <Travelguides/>,
        },

        {
          path: "/Gallery",
          element: <Gallery/>,
        },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
