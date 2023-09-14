import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import About from "@/components/about";
import Footer from "@/components/footer";
import controller from "@/utils/axios";

export interface iExperience {
  id: number;
  attributes: {
    title_location: string;
    date_range: string;
    accomplishments: string;
    skills: {
      skills: string[];
    };
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

export interface iProject {
  id: number;
  attributes: {
    title: string;
    description: string;
    skills: {
      skills: string[];
    };
    image_name: string;
    live_url: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

export interface iSeoText {
  id: number;
  attributes: {
    title: string;
    blurb: string;
    about: string;
    cta: string;
    footer_blurb: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

interface iHomeProps {
  experience: iExperience[];
  project: iProject[];
  seo: iSeoText[];
}

const Home: React.FC<iHomeProps> = ({ experience, project, seo }) => {
  return (
    <>
      <main className={`${inter.className} xl:w-2/3 xl:mx-auto`}>
        <Navbar />
        <Hero data={seo} />
        <Projects data={project} />
        <Experience data={experience} />
        <About data={seo} />
      </main>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    const expRes = await controller.get(
      `${process.env.API_URL}/experiences?sort=id:desc`
    );
    const projectRes = await controller.get(`${process.env.API_URL}/projects`);
    const seoRes = await controller.get(`${process.env.API_URL}/seo-texts`);
    return {
      props: {
        experience: expRes.data.data,
        project: projectRes.data.data,
        seo: seoRes.data.data,
      },
    };
  } catch (err) {
    console.error("this is the error", err);
    return { props: { data: "there is nothing here" } };
  }
};
