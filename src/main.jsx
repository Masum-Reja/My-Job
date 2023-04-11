import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import LoadingSpinner from "./Components/LoadingSpinner";
import Jobs from "./Jobs/AllJobs";
import AllJobs from "./Jobs/AllJobs";
// import FeatureJob from './Components/FeatureJob'
// import AllJobs from './Components/AllJobs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("job.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },

      {
        path: "alljobs",
        element:<AllJobs></AllJobs>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
      // {
      //   path: "featureJob",
      //   element: <FeatureJob></FeatureJob>,
      //   loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
