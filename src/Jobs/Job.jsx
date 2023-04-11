import React from 'react';

const Job = ({ job }) => {
      const { company_logo, job_title, company_name, location, salary } = job;
      
      return (
        <div className=" md:grid md:grid-cols-4">
          <div>
            <img src={company_logo} alt="" />

            <h1>{job_title}</h1>
            <h4>{company_name}</h4>
            <div className=" flex">
              <button className=" border me-3 p-2 text-blue-600 font-bold ">
                partTime
              </button>
              <button>fulltime</button>
            </div>
            <p>{salary}</p>
          </div>
        </div>
      );
};

export default Job;