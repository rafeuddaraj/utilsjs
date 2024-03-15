import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../common/LeftBar";
import RightBar from "../common/RightBar";
export default function PageLayout() {
  return (
    <div className="flex gap-2 xl:mx-[10%] p-5 border-x-2 min-h-[90vh] -z-10">
      <div className="min-w-[15%] h-[90vh] fixed border-r-2 min-h-full">
        <LeftBar />
      </div>
      <div className="ml-[20%]">
        <Outlet />
      </div>
      <div className="min-w-[15%] right-[10%] h-[90vh] fixed border-l-2 min-h-full -z-10">
        <RightBar />
      </div>
    </div>
  );
}
