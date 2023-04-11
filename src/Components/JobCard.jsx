import React, { useState, useEffect } from "react";

const JobCards = ({ logo, name, jobsAvailable }) => {
  return (
    <div className="job-card border m-6 p-5 drop-shadow-md bg-purple-100 rounded-md ">
      <img className="p-4 bg-purple-200 rounded-md" src={logo} alt={name} />
      <h3 className=" font-semibold text-black py-3">{name}</h3>
      <p className=" text-slate-400">{jobsAvailable} jobs available</p>
    </div>
  );
};
const JobCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("categorySection.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className=" text-center mt-32">
        <h1 className=" text-4xl font-bold my-4">Job Category List</h1>
        <p className=" text-slate-500 font-semibold">
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>

      <div className="job-card-list md:grid md:grid-cols-4">
        {data.map((item) => (
          <JobCards
            key={item.name}
            logo={item.logo}
            name={item.name}
            jobsAvailable={item.jobsAvailable}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCard;
