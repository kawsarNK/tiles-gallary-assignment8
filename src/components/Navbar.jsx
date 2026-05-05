// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user
  console.log(user);

  const handlSignOut = async () => {
    await authClient.signOut();
    redirect('/signin')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-amber-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              {/* Logo Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-md">

                <Image
                  src="/tilesLogo.png"
                  alt="Tiles gallery logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-10 h-auto"
                />
              </div>
              {/* Logo Text */}
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                TilesGallary
              </span>
            </Link>
          </div>


          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 relative group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/all-tiles"
              className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 relative group py-2"
            >
              All Tiles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/my-profile"
              className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 relative group py-2"
            >
              My Profile
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right: Auth Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  href="/signin"
                  className="px-5 py-2.5 text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 border-2 border-gray-300 rounded-lg hover:border-amber-500 hover:shadow-md"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {/* User Avatar (Logged In) */}
                <div className="flex items-center gap-3">

                  <Avatar size="sm">
                    <Avatar.Image
                      alt="John Doe"
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>

                  <button onClick={handlSignOut}
                    className="px-5 py-2.5 text-red  bg-amber-400 hover:bg-amber-600 font-medium transition-all duration-300  rounded-lg hover:border-amber-900 hover:shadow-md"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'max-h-96 opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
          }`}>
          <div className="border-t-2 border-amber-200 bg-white py-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/all-tiles"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              All Tiles
            </Link>

            {user ? (
              <>
                <Link
                  href="/my-profile"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="px-4 space-y-2 pt-2">
                <Link
                  href="/signin"
                  className="block px-4 py-3 text-center text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 border-2 border-gray-300 rounded-lg hover:border-amber-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-3 text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;