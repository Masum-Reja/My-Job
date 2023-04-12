import { useEffect, useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import "./Banner.css";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState("onsite");

  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("alljobs")) || [];
    setJobs(allJobs);
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    if (selectedOption === "onsite") {
      return job.remote_or_onsite === "Onsite";
    } else if (selectedOption === "remote") {
      return job.remote_or_onsite === "Remote";
    }
    return true;
  });

  return (
    <div>
      <div className=" banner">
        <h1 className="text-center text-4xl font-bold ">Applied Jobs</h1>

        {/* Filter Button */}
        <div className="my-24 flex justify-star items-center">
          <label
            className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-md font-bold"
            htmlFor="job-type"
          >
            Job Type
          </label>
          <div className="my-5 mx-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-md font-bold ">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="px-2 py-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job table */}
      <div className="w-full border-collapse">
        <div>
          {filteredJobs.map((job, index) => (
            <div key={index} className="hover:bg-gray-100 bg-slate-200">
              <div className="md:flex my-16">
                <img
                  className="p-12 rounded-md m-9 bg-slate-300 md:w-1/4 w-20"
                  src={job.company_logo}
                  alt={name}
                />
                <div className=" md:flex justify-between items-center">
                  <div>
                    {" "}
                    <h3 className=" font-semibold text-black py-3">
                      {job.job_title}
                    </h3>
                    <p className=" text-slate-500 mb-3 font-semibold">
                      {job.company_name}
                    </p>
                    <button className=" text-blue-400 border me-5 border-blue-600 font-bold bg-gradient-to-r py-1 px-3 rounded-sm">
                      {job.remote_or_onsite}
                    </button>
                    <button className=" text-blue-400 border me-5 border-blue-600 font-bold bg-gradient-to-r py-1 px-3 rounded-sm">
                      {job.fulltime_parttime}
                    </button>
                    <div className=" my-7 flex gap-9  text-slate-600 font-semibold">
                      <p className=" flex">
                        <MapPinIcon className="h-6 w-6 fill-none stroke-slate-600 me-2"></MapPinIcon>
                        <span> {job.location}</span>
                      </p>
                      <p className=" flex">
                        <CurrencyDollarIcon className="h-6 w-6 fill-none stroke-slate-600 me-2"></CurrencyDollarIcon>
                        <span>{job.salary}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 ms-36 rounded-sm font-bold ">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
