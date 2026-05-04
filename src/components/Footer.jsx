// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                                <Image
                                    src="/tilesLogo.png"
                                    alt="Tiles gallery logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-10 h-auto" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                TilesGallary
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Discover premium tiles for your perfect space. From classic designs to modern patterns, we bring quality and elegance to every room.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.081-.433-1.416-.994-1.416-.574 0-1.132.465-1.132 1.433v2.844h-2v-6h2v1.004c.434-.669 1.144-1.004 2.124-1.004 1.545 0 3 .943 3 2.799v3.201z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-4">Quick Links</h6>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm inline-flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-tiles" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm inline-flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    All Tiles
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-profile" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm inline-flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-tiles?sort=featured" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm inline-flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Featured Tiles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-4">Categories</h6>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm cursor-pointer">
                                    Ceramic Tiles
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm cursor-pointer">
                                    Stone Tiles
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm cursor-pointer">
                                    Wood-Look Tiles
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm cursor-pointer">
                                    Glass Tiles
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm cursor-pointer">
                                    Marble Tiles
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h6 className="text-white font-semibold text-lg mb-4">Contact Us</h6>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400 text-sm">
                                    123 Tile Street, Design District, NY 10001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@tilesgallery.com" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm">
                                    info@tilesgallery.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm">
                                    +1 (234) 567-890
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter (Optional) */}
                        <div className="mt-6">
                            <h6 className="text-white font-semibold text-sm mb-2">Newsletter</h6>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-gray-800 text-white text-sm px-1 py-1.5 rounded-lg border border-gray-700 focus:outline-none focus:border-amber-500 transition-colors"
                                />
                                <button className="mr-2 bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded-lg text-sm font-semibold transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} TilesGallary. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;