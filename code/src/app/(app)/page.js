import About from '@/components/About';
import Hero from '@/components/Hero';
import React from 'react';

const Page = () => {
  return (
    <main className="relative bg-black flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default Page;