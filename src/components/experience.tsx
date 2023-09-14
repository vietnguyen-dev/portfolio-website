import { iExperience } from "@/pages";

export interface iSkillsComponent {
  skills: string[];
}

export const Skill: React.FC<iSkillsComponent> = ({ skills }) => {
  return (
    <div className="mt-2 mb-3">
      {skills.map((skill) => (
        <div className="badge badge-accent mr-1" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
};

interface iExperienceComponent {
  data: iExperience[];
}

const Experience: React.FC<iExperienceComponent> = ({ data }) => {
  return (
    <div className="px-6 py-8 mb-3" id="experience">
      <h3 className="text-xl sticky top-0 py-4 bg-base-100 bg-opacity-90 w-11/12 md:w-full md:text-center">
        EXPERIENCE
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((job) => (
          <div className="py-5 max-w-xs mb-3" key={job.id}>
            <p className="text-sm text-gray-500 mt-1 ">
              {job.attributes.date_range}
            </p>
            <p className="text-md font-semibold">
              {job.attributes.title_location}
            </p>
            <p className="text-sm mt-2 text-gray-500">
              {job.attributes.accomplishments}
            </p>
            <Skill skills={job.attributes.skills.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
