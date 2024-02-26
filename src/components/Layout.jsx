import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="overflow-hidden min-h-screen">
      <nav>
        <Navbar />
      </nav>

      <main className="min-h-[90vh]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
