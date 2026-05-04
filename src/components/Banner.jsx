import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
            {/* Optimized Background Image using next/image */}
            <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                alt="Modern tile design interior"
                fill
                className="object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Discover Your Perfect Aesthetic
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl mb-8">
                            Explore our exclusive tile collections and bring your dream interiors to life
                        </p>
                        <Link
                            href="/all-tiles"
                            className="btn btn-lg bg-amber-500 text-white hover:bg-amber-600 border-none px-8 py-3 text-lg font-semibold"
                        >
                            Browse Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 to-transparent"></div>
        </section>
    );
};

export default Banner;