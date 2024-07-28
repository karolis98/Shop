import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Motociklai from "./pages/Motociklai.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import BikerPedia from "./pages/BikerPedia.tsx";
import MotoClothing from "./pages/MotoClothing.tsx";
import PartsCatalog from "./pages/PartsCatalog.tsx";
import Service from "./pages/Service.tsx";
import UsedMotorcycle from "./pages/UsedMotorcycle.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Motociklai",
    element: <Motociklai />,
  },
  {
    path: "/Bikerpedia",
    element: <BikerPedia />,
  },
  {
    path: "/Motoclothing",
    element: <MotoClothing />,
  },
  {
    path: "/Partscatalog",
    element: <PartsCatalog />,
  },
  {
    path: "/Service",
    element: <Service />,
  },
  {
    path: "/Usedmotorcicle",
    element: <UsedMotorcycle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
