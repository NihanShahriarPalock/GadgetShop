import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import SellerRoute from "./private/SellerRoute";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts></AddProducts>
          </SellerRoute>
        ),
      },
    ],
  },
]);
