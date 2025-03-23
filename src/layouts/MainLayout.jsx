import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import "../index.css"; 
const MainLayout = () => (
  <Fragment>
    <Navbar />
    <Home />
  </Fragment>
);

export default MainLayout;
