import { iExperience } from "@/pages";

interface iSkills {
  skills: string[];
}

const Skill: React.FC<iSkills> = ({ skills }) => {
  return (
    <div className="mt-2">
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
    <div className="px-6 pt-6 pb-8 sm:px-12 sm:py-6" id="experience">
      <h3 className="text-xl mt-3">EXPERIENCE</h3>
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
