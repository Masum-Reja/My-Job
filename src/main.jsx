import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import AllJobs from "./Jobs/AllJobs";
import AppliedJobs from "./Components/AppliedJobs";


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
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },

      {
        path: "alljobs",
        element: <AllJobs></AllJobs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
