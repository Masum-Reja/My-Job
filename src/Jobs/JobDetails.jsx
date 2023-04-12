import { useContext } from "react";
import Job from "./Job";
import { MyContext } from "./AllJobs";
import "../Components/Banner.css";

const JobDetails = () => {
  const [cart] = useContext(MyContext);
  return (
    <div>
      <div className="banner ">
        <h1 className="text-center text-4xl font-bold ">Job Details</h1>
      </div>

      {cart.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default JobDetails;
