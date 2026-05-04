// components/Banner.jsx
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative w-full h-[80vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
            {/* Optimized Background Image using next/image */}
            <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                alt="Modern tile design interior"
                fill
                className="object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

            {/* Content - Centered Vertically and Horizontally */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Discover Your{" "}
                            <span className="text-amber-500 block sm:inline">
                                Perfect Aesthetic
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                            Explore our exclusive tile collections and bring your dream interiors to life
                        </p>

                        {/* Button Centered with Arrow */}
                        <div className="flex justify-center">
                            {/* Button with Arrow */}
                            <Link
                                href="/all-tiles"
                                className="  group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 md:px-10 md:py-4 rounded-lg text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                            >
                                Browse Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent"></div>
        </section>
    );
};

export default Banner;