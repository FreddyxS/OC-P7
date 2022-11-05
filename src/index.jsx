import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./normalize.css";
import "./index.css";

import Root from "./routes/root";
import About from "./routes/about";
import Logement from "./routes/logement";
import ErrorPage from "./routes/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, /* affiche la page d'erreur lorsque aucun url ne correspond */
  },
  {
    path: "about/",
    element: <About/>,
  },
  {
    path: "logement/:id", /*:id permet des paramètres dans l'url après /logement*/
    element: <Logement/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);