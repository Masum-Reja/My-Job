
import { useEffect, useState } from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("alljobs")) || [];
    setJobs(allJobs);
  }, []);

  return (
    <div className="my-12">
      <h1 className="text-2xl font-bold mb-6">Applied Jobs</h1>

      {/* Job table */}
      <table className="w-full border-collapse">
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="hover:bg-gray-100 bg-slate-200">
              <div className="md:flex my-9">
                <img
                  className="p-12 rounded-md m-9 bg-slate-300 md:w-1/4 w-20"
                  src={job.company_logo}
                  alt={name}
                />
                <div className=" md:flex items-center justify-between ">
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
                    <button className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 mb-6 rounded-sm font-bold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobs;
