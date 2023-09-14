import Image from "next/image";
import Link from "next/link";

import { iProject } from "@/pages";
import { Skill } from "./experience";

interface iProjectsComponent {
  data: iProject[];
}

const Projects: React.FC<iProjectsComponent> = ({ data }) => {
  return (
    <div className="px-6 py-8 mb-3" id="projects">
      <h3 className="text-xl sticky top-0 py-4 bg-base-100 bg-opacity-90 w-11/12 md:w-full md:text-center">
        FREELANCE PROJECTS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <div
            className="py-5 max-w-xs mb-3 md:m-3 md:mx-auto"
            key={project.id}
          >
            <Image
              src={`/${project.attributes.image_name}`}
              width={300}
              height={200}
              alt="Image of this project"
              className="max-w-xs"
            />
            <h3 className="text-md font-semibold mt-3">
              {project.attributes.title}
            </h3>
            <p className="text-sm mt-2 text-gray-500">
              {project.attributes.description}
            </p>
            <Skill skills={project.attributes.skills.skills} />
            <Link
              className="link underline-offset-4"
              href={project.attributes.live_url}
            >
              View Live Here
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
