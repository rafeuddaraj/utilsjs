import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../nav/Footer";

export default function Layout() {
  return (
    <div className="overflow-hidden min-h-screen">
      <nav>
        <Navbar />
      </nav>

      <main className="min-h-[90vh] mt-16">
        <Outlet />
      </main>
      <footer className="bg-pink w-full">
        <Footer />
      </footer>
    </div>
  );
}
