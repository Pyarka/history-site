import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./routes/root/App";
import Surprise from "./routes/surprise/Surprise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/surprise",
    element: <Surprise />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);