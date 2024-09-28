"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";

const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkUsernameUnique = async () => {
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          const response = await axios.get(
            `/api/check-username-unique?username=${username}`
          );
          setUsernameMessage(response.data.message);
        } catch (error) {
          setUsernameMessage(
            error.response?.data.message ?? "Error checking username"
          );
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkUsernameUnique();
  }, [username]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/sign-up", data);
      alert("Success: " + response.data.message);
      router.replace(`/verify/${username}`);
    } catch (error) {
      console.error("Error during sign-up:", error);
      const errorMessage =
        error.response?.data.message ?? "Sign-up failed. Please try again.";
      alert("Error: " + errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-black/[0.96] antialiased relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex justify-center items-center flex-grow bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">
              Welcome to Pandoras
            </h1>
            <p className="mb-4">Sign up to start your journey</p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <Input
                placeholder="Username"
                {...form.register("username")}
                onChange={(e) => {
                  form.setValue("username", e.target.value);
                  setUsername(e.target.value);
                }}
                className="mt-1"
              />
              {isCheckingUsername && <Loader2 className="animate-spin" />}
              <p
                className={`mt-1 text-sm ${
                  usernameMessage === "Username is unique"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {usernameMessage}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Email"
                {...form.register("email")}
                className="mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Password"
                {...form.register("password")}
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="text-center mt-4">
            <p>
              Already a member?{" "}
              <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Spotlight className="hidden md:block -top-20 left-0" fill="white" />
    </div>
  );
};

export default Page;
