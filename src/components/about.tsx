import ContactMe from "./contact-me";

import { iSeoText } from "@/pages";

interface iAboutComponent {
  data: iSeoText[];
}

const About: React.FC<iAboutComponent> = ({ data }) => {
  return (
    <div className="px-6 pt-6 pb-8 sm:px-12 sm:py-6" id="about">
      <h3 className="text-xl  sticky top-0 py-4 bg-base-100 bg-opacity-90 w-11/12">
        About
      </h3>
      <p>{data[0].attributes.about}</p>
      <p className="my-3">{data[0].attributes.cta}</p>
      <ContactMe />
    </div>
  );
};

export default About;
