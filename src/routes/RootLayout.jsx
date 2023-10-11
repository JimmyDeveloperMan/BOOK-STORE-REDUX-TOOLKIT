import React from "react";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Rootlayout;
