import ContactMe from "./contact-me";

import { iSeoText } from "@/pages";

interface iAboutComponent {
  data: iSeoText[];
}

const About: React.FC<iAboutComponent> = ({ data }) => {
  return (
    <div className="px-6 py-8 mb-6" id="about">
      <h3 className="text-xl sticky top-0 py-4 bg-base-100 bg-opacity-90 w-11/12 md:text-center md:w-full">
        ABOUT ME
      </h3>
      <p className="md:mx-auto md:w-1/2">{data[0].attributes.about}</p>
      <p className="my-3 md:mx-auto md:w-1/2">{data[0].attributes.cta}</p>
      <ContactMe />
    </div>
  );
};

export default About;
