import React from "react";
import ContactMe from "./contact-me";

import { iSeoText } from "@/pages";

interface iHeroComponent {
  data: iSeoText[];
}

const Hero: React.FC<iHeroComponent> = ({ data }) => {
  return (
    <div className="px-6 py-3 mb-12 sm:px-12 sm:py-6">
      <h1 className="text-4xl font-bold">Viet Nguyen</h1>
      <h2 className="mt-3 text-xl front-semibold">
        {data[0].attributes.title}
      </h2>
      <h3 className="mt-3">{data[0].attributes.blurb}</h3>
      <ContactMe extraClass={"mt-5"} />
    </div>
  );
};

export default Hero;
