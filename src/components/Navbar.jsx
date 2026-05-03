"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const user = true;
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* Left - Logo */}
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          TileGallery
        </Link>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-tiles">All Tiles</Link></li>
          {user && <li><Link href="/my-profile">My Profile</Link></li>}
        </ul>
      </div>

      {/* Right - Auth */}
      <div className="navbar-end">
        {!user ? (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <span className="hidden md:block">user name</span>
            <button className="btn btn-error btn-sm">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          ☰
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-tiles">All Tiles</Link></li>
          {user && <li><Link href="/my-profile">My Profile</Link></li>}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;