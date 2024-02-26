import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <Outlet />
    </div>
  );
}
