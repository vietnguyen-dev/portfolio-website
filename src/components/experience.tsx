const Experience = () => {
  return (
    <div className="px-6 pt-6 pb-8 sm:px-12 sm:py-6" id="experience">
      <h3 className="text-xl">EXPERIENCE</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="py-5 max-w-xs mb-3">
          <p className="text-sm text-gray-500 mt-1 ">Dec 2021 - Jul 2022</p>
          <p className="text-md font-semibold">
            Software Engineer @ Append Media
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Reduced supply chain costs of a large sportswear company by $200k
            through support of legacy applications Developed React applications
            that optimized operational processes, resulting in a 30% reduction
            in average work Collaborated with clients to identify & fix software
            bugs quickly, reducing bug fix time by 20%. Crafted documentation
            for legacy projects, resulting in increased development speed of
            15%.
          </p>
          <div className="badge badge-accent mr-1 mt-2">React</div>
          <div className="badge badge-accent mr-1">Bootstrap</div>
          <div className="badge badge-accent mr-1">KendoUI</div>
          <div className="badge badge-accent mr-1">Sass</div>
          <div className="badge badge-accent mr-1">Node.js</div>
          <div className="badge badge-accent mr-1">Express.js</div>
          <div className="badge badge-accent mr-1">Microsoft SQL Server</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
