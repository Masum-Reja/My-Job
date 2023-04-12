
import { useContext } from 'react';
import Job from './Job';
import { MyContext } from './AllJobs';


const JobDetails = () => {
      const [cart] = useContext(MyContext);
      return (
            <div>
                 {cart.map((job) => (        
                   
                <Job
                      key={job.id}
                              job={job}
                             
                ></Job>
                 ))}
        </div>
      );
};

export default JobDetails;