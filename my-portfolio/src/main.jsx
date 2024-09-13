import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Posters from "./components/Posters.jsx";
import Logo from "./components/Logos.jsx";
import Packaging from "./components/Packaging.jsx";
import BusinessCards from "./components/BusinessCards.jsx";
import Gallery from "./components/Gallery.jsx";
import Photography from "./components/Photography.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/poster", element: <Posters /> },
  { path: "/logos", element: <Logo /> },
  { path: "/packaging", element: <Packaging /> },
  { path: "/businesscards", element: <BusinessCards /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/photograpy", element: <Photography /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
