import About from '@/components/About';
import Hero from '@/components/Hero';
import Meet from '@/components/Meet';
import ProdDesc from '@/components/ProdDesc';
import React from 'react';

const Page = () => {
  return (
    <main className="relative bg-black flex flex-col justify-center items-center h-screen w-full overflow-hidden">
      <div className="max-w-7xl w-full p-5">
        <Hero />
        <About />
        <ProdDesc />
        <Meet />
      </div>
    </main>
  );
};

export default Page;