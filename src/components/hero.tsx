import React from "react";
import ContactMe from "./contact-me";

import { iSeoText } from "@/pages";

interface iHeroComponent {
  data: iSeoText[];
}

const Hero: React.FC<iHeroComponent> = ({ data }) => {
  return (
    <div className="px-6 py-8 mb-3">
      <h1 className="text-4xl font-bold md:text-center">Viet Nguyen</h1>
      <h2 className="mt-3 text-xl front-semibold md:text-center">
        {data[0].attributes.title}
      </h2>
      <h3 className="mt-3 md:text-center">{data[0].attributes.blurb}</h3>
      <ContactMe extraClass={"mt-5"} />
    </div>
  );
};

export default Hero;
