import React from "react";
import ContactMe from "./contact-me";

export default function Hero() {
  return (
    <div className="px-6 py-3 sm:px-12 sm:py-6">
      <h1 className="text-4xl font-bold">Viet Nguyen</h1>
      <h2 className="mt-3 text-xl front-semibold">Front End Web Developer</h2>
      <h3 className="mt-3 ">
        I'm a creative software developer dedicated to building inclusive,
        user-centric digital solutions
      </h3>
      <ContactMe extraClass={"mt-5"} />
    </div>
  );
}
