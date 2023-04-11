import React from "react";
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import AllJobs from "../Jobs/AllJobs";
//import FeatureJob from './FeatureJob';
// import JobCard from './JobCard';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <AllJobs></AllJobs>
    </div>
  );
};

export default Home;
