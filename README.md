# 🧱 Tiles Gallery

A modern, responsive web application for showcasing a curated collection of premium tiles. This project was built to help users discover perfect aesthetics for their spaces, featuring high-quality visuals and a seamless user experience.

**Live URL:** [https://tiles-gallary-assignment8.vercel.app/](https://tiles-gallary-assignment8.vercel.app/)

## 🚀 Key Features

-   **Dynamic Gallery:** Browse an extensive collection of tiles with real-time search functionality.
-   **Secure Authentication:** Robust user login and registration system using **BetterAuth** with Google Social Login and MongoDB integration.
-   **Protected Routes:** Specific pages like Tile Details and My Profile are secured and only accessible to logged-in users.
-   **User Profile Management:** Logged-in users can view their profile and update their name and profile image URL.
-   **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views using Tailwind CSS and HeroUI/DaisyUI.
-   **Interactive UI:** Includes a marquee for new arrivals, loading states for data fetching, and custom animations.
-   **SEO & Routing:** Built with Next.js App Router for optimal performance and SEO-friendly routing.

## 🛠️ Tech Stack & Packages Used

-   **Framework:** Next.js (App Router)
-   **Styling:** Tailwind CSS
-   **UI Components:** HeroUI / DaisyUI
-   **Authentication:** BetterAuth (with MongoDB Adapter)
-   **Database:** MongoDB
-   **Notifications:** React Hot Toast / SweetAlert2
-   **Slider/Carousel:** SwiperJS
-   **Animations:** Animate.css

## 📦 Installation & Local Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kawsarNK/tiles-gallery-project.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd tiles-gallery-project
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your credentials (MONGODB_URI, BETTER_AUTH_SECRET, etc.).
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
