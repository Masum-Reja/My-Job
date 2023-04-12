import {
  MapPinIcon,
  EnvelopeIcon,
  PhotoIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Job = ({ job }) => {
  const {
    job_title,
    location,
    salary,
    job_responsibility,
    job_description,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const [isApplied, setIsApplied] = useState(false);

  const handleApplyNowClick = () => {
    const allJobs = JSON.parse(localStorage.getItem("alljobs") || "[]");
    allJobs.push(job);
    localStorage.setItem("alljobs", JSON.stringify(allJobs));
    setIsApplied(true);
    alert(`You have successfully applied for the job: ${job_title}`);
  };

  return (
    <div className="grid md:grid-cols-2 my-12">
      <div>
        <p className="mb-6">
          <span className=" font-bold"> Job Description: </span>
          {job_description}
        </p>
        <p className=" mb-6">
          <span className=" font-bold"> Job Responsibility: </span>
          {job_responsibility}
        </p>

        <div className=" flex-wrap">
          <span className=" font-bold"> Educational Requirements: </span>
          <p> {educational_requirements}</p>
        </div>

        <div className=" flex-wrap my-4">
          <span className=" font-bold"> Experiences: </span>

          <p>{experiences}</p>
        </div>
      </div>

      <div className="bg-slate-300 ml-32 pl-6 py-6">
        <h1 className="pb-6 text-2xl font-bold">Job Details</h1>
        <hr />

        <h3 className=" flex items-center my-2">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-500" /> Salary:{" "}
          {salary} (Per Month)
        </h3>
        <h3 className=" flex items-center">
          <CalendarDaysIcon className="h-6 w-6 text-gray-500 me-2" />
          Job title: {job_title}
        </h3>
        <h1 className=" my-5 text-2xl font-bold">Contact Information</h1>
        <hr />
        <h3 className=" flex items-center my-2">
          {" "}
          <PhotoIcon className="h-6 w-6 text-gray-500 me-2" />
          Phone: {contact_information.phone}
        </h3>
        <h3 className="flex items-center my-2">
          {" "}
          <EnvelopeIcon className="h-6 w-6 text-gray-500 me-2" />
          Email: {contact_information.email}
        </h3>
        <h3 className="flex items-center mb-2">
          <MapPinIcon className="h-6 w-6 text-gray-500 me-2" />
          Address: {location}
        </h3>

        <div>
          <button
            onClick={handleApplyNowClick}
            disabled={isApplied}
            className={`text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 md:px-36 py-3 w-100 rounded-sm font-bold absolute right-1 my-20 px-24 ${
              isApplied ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isApplied ? "Applied" : "Apply Now"}
          </button>
          {isApplied && (
            <p className="text-green-500 font-bold text-center ">
              Application submitted successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
