import React from "react";
import image from "../20220428_111822.jpg";

export default function Home() {
  return (
    <div>
      <main>
        <img
          src={image}
          alt="Omori Bg :3"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name text-bold">
            Hello. I'm Aya :3
          </h1>
        </section>
      </main>
    </div>
  );
}
