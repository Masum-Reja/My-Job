import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon
} from "@heroicons/react/24/solid";

const JobCard = ({item}) => {
       const {
         company_logo,
         job_title,
         company_name,
         location,
         salary,
         fulltime_parttime,
         remote_or_onsite,
       } = item;
  return (
    <div className="job-card border m-6 p-5 drop-shadow-md rounded-md ">
      <img className="p-4 rounded-md" src={company_logo} alt={name} />
      <h3 className=" font-semibold text-black py-3">{job_title}</h3>
      <p className=" text-slate-500 mb-3 font-semibold">
        {company_name} jobs available
      </p>
      <button className=" text-blue-400 border me-5 border-blue-600 font-bold bg-gradient-to-r py-1 px-3 rounded-sm">
        {remote_or_onsite}
      </button>
      <button className=" text-blue-400 border me-5 border-blue-600 font-bold bg-gradient-to-r py-1 px-3 rounded-sm">
        {fulltime_parttime}
      </button>
      <div className=" my-7 flex gap-9  text-slate-600 font-semibold">
        <p className=" flex">
          <MapPinIcon className="h-6 w-6 fill-none stroke-slate-600 me-2"></MapPinIcon>
          <span> {location}</span>
        </p>
        <p className=' flex'>
          <CurrencyDollarIcon className="h-6 w-6 fill-none stroke-slate-600 me-2"></CurrencyDollarIcon>
          <span>{salary}</span>
        </p>
      </div>
      <Link className=" text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 mb-6 rounded-sm font-bold">
        View Details
      </Link>
    </div>
  );
};

const AllJobs = () => {
      const alljobs = useLoaderData();
      return (
        <div>
          <div className=" text-center mt-32">
            <h1 className=" text-4xl font-bold my-4">Featured Jobs</h1>
            <p className=" text-slate-500 font-semibold">
              <small>
                Explore thousands of job opportunities with all the information
                you need. Its your future
              </small>
            </p>
          </div>

          <div className="job-card-list md:grid md:grid-cols-2">
            {alljobs.map((item) => (
              <JobCard key={item.id} item={item} />
            ))}
          </div>
          <Link
            to="job"
            className=" flex justify-center  text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-md font-bold mx-96"
          >
            {" "}
            See All Jobs
          </Link>
        </div>
      );
};

export default AllJobs;