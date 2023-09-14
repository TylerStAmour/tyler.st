import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/work-sans";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"*"} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
)
