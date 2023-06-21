import React from "react";
import { Outlet } from "react-router-dom";
import SearchInput from "../components/Search";
import Header from "../components/Header";

const Rootlayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Rootlayout;
