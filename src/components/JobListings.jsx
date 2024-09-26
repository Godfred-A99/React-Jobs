/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import JobListing from "./joblisting";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Popular Jobs" : "All Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
