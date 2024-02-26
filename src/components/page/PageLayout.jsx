import React from "react";
import { Outlet } from "react-router-dom";
export default function PageLayout() {
  return (
    <div className="flex gap-2 xl:mx-[10%] p-5 border-x-2 min-h-[90vh]">
      <div className="min-w-[15%] h-[90vh] fixed border-r-2 min-h-full">
        left Nav
      </div>
      <div className="ml-[20%]">
        <Outlet />
      </div>
      <div className="min-w-[15%] right-[10%] h-[90vh] fixed border-l-2 min-h-full">
        right Nav
      </div>
    </div>
  );
}
