"use client";
import Image from "next/image";

const Meet = () => {
  // Array of author data for the cards
  const authors = [
    {
      name: "Tanish Kackria",
      linkedin: "https://www.linkedin.com/in/tanish-kackria/", 
      bgImage: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      description: "Card with LinkedIn link, complete name - most suitable for blogs."
    },
    {
      name: "Puranjot Singh Naga",
      linkedin: "https://www.linkedin.com/in/puranjot-singh/",
      bgImage: "https://images.unsplash.com/photo-1529912213474-00a0720c3789?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      description: "An example blog card with different content."
    },
    {
      name: "Siddharth Chauhan",
      linkedin: "",
      bgImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      description: "A simple card design for a blog."
    },
    {
      name: "Pranav malholtra",
      linkedin: "",
      bgImage: "https://images.unsplash.com/photo-1541534401786-54d8d3f8f9f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      description: "Creative author card design for blogging purposes."
    },
    {
      name: "Devansh aggarwal",
      linkedin: "https://www.linkedin.com/in/devansh-aggarwal-21809a257/",
      bgImage: "https://images.unsplash.com/photo-1507209696990-b67a543fdc9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      description: "Short blog read with dynamic author information."
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {authors.map((author, index) => (
        <div key={index} className="max-w-xs w-full group/card">
          <div
            className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
            style={{ backgroundImage: `url(${author.bgImage})`, backgroundSize: 'cover' }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              {/* LinkedIn Logo with link */}
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                <Image
                  height={30}
                  width={30}
                  alt="LinkedIn Logo"
                  src="/linkedin.png"
                  className="h-8 w-8"
                />
              </a>
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  {author.name}
                </p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Author Card
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                {author.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meet;
