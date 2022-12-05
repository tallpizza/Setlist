import React from "react";
import { createRoot } from "react-dom/client";
import { Main_screen } from "./component/SetList";
import { Testscreen } from "./test/test";
import { Home } from "./component/Home";
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home /> } />
    <Route path="/setlist" element={<Main_screen/>}/>
    <Route path="/test" element={<Testscreen/>}/>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
