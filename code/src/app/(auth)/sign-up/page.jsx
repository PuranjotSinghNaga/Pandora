"use client"
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setisCheckingUsername] = useState(false);
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
        setisCheckingUsername(true);
        setUsernameMessage("");
        try {
          const response = await axios.get(
            `/api/check-username-unique?username=${username}`
          );
          setUsernameMessage(response.data.message);
        } catch (error) {
          setUsernameMessage(
            error.response?.data.message ?? "Error checking Username"
          );
        } finally {
          setisCheckingUsername(false);
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

      setIsSubmitting(false);
    } catch (error) {
      console.error("Error during sign-up:", error);
      let errorMessage = error.response?.data.message ?? "Sign-up failed. Please try again.";
      alert("Error: " + errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Welcome to Pandoras
          </h1>
          <p className="mb-4">Sign up to stat your jouney</p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label>Username</label>
            <Input
              placeholder="username"
              {...form.register("username")}
              onChange={(e) => {
                form.setValue("username", e.target.value);
                setUsername(e.target.value);
              }}
            />
            {isCheckingUsername && <Loader2 className="animate-spin" />}
            <p
              className={`text-sm ${
                usernameMessage === "Username is unique"
                  ? " text-green-500 "
                  : " text-red-500"
              }`}
            >
              {usernameMessage}
            </p>
          </div>

          <div>
            <label>Email</label>
            <Input placeholder="Email" {...form.register("email")} />
          </div>

          <div>
            <label>Password</label>
            <Input type="password" placeholder="password" {...form.register("password")} />
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
  );
};

export default Page;
