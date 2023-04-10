
// import React from 'react';
// import { useState, useEffect } from "react";



// // Fetch JSON data on component mount
// useEffect(() => {
//   fetch("categorySection.json")
//     .then((response) => response.json())
//     .then(data => console.log(data));
//   }, []);
 
// const CategorySection = () => {
//   return (
//     <div>
//       
//     </div>
//   );
// };

// export default CategorySection;


import React, { useState, useEffect } from "react";

const JobCard = ({ logo, name, jobsAvailable }) => {
  return (
    <div className="job-card">
      <img src={logo} alt={name} />
      <h3>{name}</h3>
      <p>{jobsAvailable} jobs available</p>
    </div>
  );
};

const JobCardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("categorySection.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className=" text-center my-20">
        <h1 className=" text-4xl font-bold my-4">Job Category List</h1>
        {" "}
        <p className=" text-slate-500 font-semibold">
          {" "}
          <small>
             Explore thousands of job opportunities with all the information
            you need. Its your future{" "}
          </small>
          {" "}
        </p>
        {" "}
      </div>

      <div className="job-card-list">
        {data.map((item) => (
          <JobCard
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

export default JobCardList;
