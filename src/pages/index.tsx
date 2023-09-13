import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
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
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

interface iHomeProps {
  experience: iExperience[];
  project: iProject[];
}

const Home: React.FC<iHomeProps> = ({ experience, project }) => {
  console.log(project);
  return (
    <>
      <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
        <Navbar />
        <Hero />
        <Projects />
        <Experience data={experience} />
      </main>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="fill-current"
            >
              <path d="M3 2a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1H3zm18.194 5.825a3.006 3.006 0 00-2.123.883 3.014 3.014 0 00-.882 2.123c0 .815.28 1.496.882 2.123.598.63 1.377.883 2.123.883s1.524-.253 2.123-.883c.602-.627.883-1.308.883-2.123a3.007 3.007 0 00-.883-2.123c-.599-.63-1.377-.883-2.123-.883zm-4.944 9.31h-2.827V13.43h2.827zm-1.414-5.158c0 .42-.344.764-.765.764h-.038c-.423 0-.767-.344-.767-.764v-5.05c0-.42.344-.765.767-.765h.038c.421 0 .765.345.765.765zm-6.45 6.394h2.474v8.044h-2.474V16.372zm-1.536-5.162a1.97 1.97 0 00-1.986-1.971 1.964 1.964 0 00-1.983 1.971 1.97 1.97 0 001.983 1.97 1.97 1.97 0 001.986-1.97zm-2.682 9.674h2.367v8.044H8.988V16.372z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .298c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.58 0-.287-.011-1.04-.015-2.04-3.006.653-3.64-1.445-3.64-1.445-.492-1.246-1.2-1.578-1.2-1.578-.983-.67.074-.658.074-.658 1.086.076 1.657 1.113 1.657 1.113.963 1.651 2.53 1.176 3.147.9.097-.696.376-1.175.685-1.445-2.396-.27-4.908-1.198-4.908-5.332 0-1.18.423-2.142 1.114-2.89-.111-.272-.48-1.366.105-2.842 0 0 .897-.288 2.938 1.103a10.426 10.426 0 0 1 2.794-.378 10.45 10.45 0 0 1 2.794.378c2.04-1.392 2.936-1.103 2.936-1.103.585 1.476.215 2.57.105 2.842.692.748 1.114 1.71 1.114 2.89 0 4.144-2.514 5.06-4.92 5.324.387.335.732.993.732 1.996 0 1.444-.013 2.609-.013 2.959 0 .32.191.698.799.579a12.013 12.013 0 0 0 8.21-11.385c0-6.627-5.373-12-12-12z" />
            </svg>

            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
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
    return {
      props: {
        experience: expRes.data.data,
        project: projectRes.data.data,
      },
    };
  } catch (err) {
    console.error("this is the error", err);
    // Return an empty object or handle the error as needed
    return { props: { data: "there is nothing here" } };
  }
};
