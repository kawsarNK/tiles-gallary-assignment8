// app/signin/page.jsx
"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { useState } from "react";

export default function SignInPage() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                setError(error.message || "Invalid email or password");
                // console.log({ data, error });
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
            console.error("Signin error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            await authClient.signIn.social({
                provider: 'google',
                callbackURL: "/",
            });
        } catch (err) {
            setError("Google sign in failed. Please try again.");
            console.error("Google signin error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <Card className="border mx-auto max-w-md w-full py-8 px-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                                TilesGallary
                            </span>
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Sign in to your Tiles Gallary account
                    </p>
                </div>


                {/* Google Sign In Button */}
                <Button
                    onPress={handleGoogleSignIn}
                    className="w-full mb-4 bg-amber-700 border-2 border-gray-300 hover:border-amber-500 transition-colors h-12"
                    isDisabled={loading}
                >
                    <GrGoogle className="mr-2 text-lg " />
                    Sign in with Google
                </Button>

                {/* Divider */}
                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500 font-semibold">Or</span>
                    </div>
                </div>

                {/* Sign In Form */}
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" className="w-full" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" className="w-full" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-2">
                        <Button
                            type="submit"
                            className="flex-1 bg-amber-500 text-white hover:bg-amber-600 h-11"
                            isDisabled={loading}
                        >
                            <Check />
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                        <Button
                            type="reset"
                            variant="secondary"
                            className="flex-1 h-11"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>

                {/* Sign Up Link */}
                <div className="text-center mt-6 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-4">
                    <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-700 text-sm transition-colors inline-flex items-center gap-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </Card>
        </div>
    );
}