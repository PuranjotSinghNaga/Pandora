"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <nav className="mt-4">
            <ul>
              <li>
                <Link href="/dashboard" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/settings" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/logout" className="block p-2 text-gray-700 hover:bg-gray-200">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
          <Button className="bg-blue-500 text-white">Add New Item</Button>
        </header>

        {/* Search Bar */}
        <div className="mt-6">
          <Input placeholder="Search..." className="w-full max-w-md" />
        </div>

        {/* Content Section */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
            {/* <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Total Users</h3>
              <p className="text-2xl">1,245</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Active Sessions</h3>
              <p className="text-2xl">543</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">New Sign Ups</h3>
              <p className="text-2xl">32</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Total Revenue</h3>
              <p className="text-2xl">$12,345</p>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
