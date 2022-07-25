import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import JobAPI from "../../../services/job";
import "../new.scss";
export const NewJob = ({ title }) => {
  const jobTitleEl = useRef(null);
  const companyEl = useRef(null);
  const categoryEl = useRef(null);
  const locationEl = useRef(null);
  const summaryEl = useRef(null);
  const responsibilityEl = useRef(null);
  const qualificationEl = useRef(null);
  const majorEl = useRef(null);
  const salaryEl = useRef(null);
  const findObj = (data, selectRef) => {
    return data?.find((item) => item?.id == selectRef?.current?.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await JobAPI.addJob(
        JSON.stringify({
          jobTitle: jobTitleEl?.current?.value,
          jobSummary: summaryEl?.current?.value,
          datePublished: moment().local(),
          qualifications: qualificationEl?.current?.value,
          responsibility: responsibilityEl?.current?.value,
          company: findObj(company, companyEl),
          major: findObj(major, majorEl),
          jobCategory: findObj(category, categoryEl),
          workLocation: locationEl?.current?.value,
          salary: salaryEl?.current?.value,
        })
      );
      if (response.status === 200) {
        console.log("add successfully");
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(jobTitleEl?.current?.value);
    // console.log(companyEl?.current?.value);
    // console.log(categoryEl?.current?.value);
    // console.log(locationEl?.current?.value);
    // console.log(summaryEl?.current?.value);
    // console.log(responsibilityEl?.current?.value);
    // console.log(qualificationEl?.current?.value);
    // console.log(major?.find((item) => item?.id == majorEl?.current?.value));
    console.log(findObj(major, majorEl));
    // console.log(majorEl?.current?.value);
  };
  const [company, setCompany] = useState([]);
  const [category, setCategory] = useState([]);
  const [major, setMajor] = useState([]);
  useEffect(() => {
    const fetchCompanyData = async () => {
      const { data } = await JobAPI.loadCompany();
      setCompany(data);
    };
    const fetchCategory = async () => {
      const { data } = await JobAPI.loadCategory();
      setCategory(data);
    };
    const fetchMajor = async () => {
      const { data } = await JobAPI.loadMajor();
      setMajor(data);
    };
    fetchMajor();
    fetchCompanyData();
    fetchCategory();
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={onSubmitHandler}>
              <div>
                <div className="formInput">
                  <label>Job Title</label>
                  <input
                    ref={jobTitleEl}
                    type="text"
                    placeholder="Data Scientist"
                    required
                  />
                </div>
                <div className="formInput">
                  <label>Salary</label>
                  <input
                    ref={salaryEl}
                    type="text"
                    placeholder="1000$"
                    required
                  />
                </div>
                <div className="formInput">
                  <label>Job summary</label>
                  <textarea
                    ref={summaryEl}
                    className="border px-4 py-2 rounded-md"
                    style={{ width: "400px", height: "180px" }}
                    // ref={companyName}
                    type="text"
                    placeholder="Job summary"
                    required
                  />
                </div>
                <div className="formInput">
                  <label>Work location</label>
                  <input
                    ref={locationEl}
                    type="text"
                    placeholder="Ho Chi Minh city"
                    required
                  />
                </div>

                <button className="px-52 bg-[#F36522] rounded-md text-white py-4 w-full mt-32 ml-auto">
                  Send
                </button>
              </div>
              <div>
                <div className="formInput">
                  <label>Major</label>
                  <select className="select" ref={majorEl}>
                    {major?.map((data, index) => {
                      return (
                        <option key={index} value={data?.id}>
                          {data?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="formInput  -px-4 pr-12">
                  <label>Company</label>
                  <select className="select" ref={companyEl}>
                    {company?.map((data, index) => {
                      return (
                        <option key={index} value={data?.id}>
                          {data?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="formInput">
                  <label>Category</label>
                  <select className="select" ref={categoryEl}>
                    {category?.map((data, index) => {
                      return (
                        <option key={index} value={data?.id}>
                          {data?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div>
                <div className="formInput">
                  <label>Responsibilities</label>
                  <textarea
                    ref={responsibilityEl}
                    className="border px-4 py-2 rounded-md"
                    style={{ width: "500px", height: "180px" }}
                    // ref={companyName}
                    type="text"
                    placeholder="Enter job responsibilities"
                    required
                  />
                </div>
                <div className="formInput">
                  <label>Qualification</label>
                  <textarea
                    ref={qualificationEl}
                    className="border px-4 py-2 rounded-md"
                    style={{ width: "500px", height: "180px" }}
                    // ref={companyName}
                    type="text"
                    placeholder="Enter job qualification"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
