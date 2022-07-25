import React, { useEffect, useRef, useState } from "react";
import SelectLabels from "../../../components/dropdown";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import JobAPI from "../../../services/job";
import "../new.scss";
export const NewCompany = ({ title }) => {
  const companyName = useRef(null);
  const description = useRef(null);
  const selectRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [industry, setIndustry] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await JobAPI.addCompany(
        JSON.stringify({
          name: companyName?.current?.value,
          description: description?.current?.value,
          industry: {
            id: selectRef?.current?.value,
            name: industry.find((data) => {
              return data?.id == selectRef?.current?.value;
            }).name,
          },
        })
      );

      if (response.status === 200) {
        console.log("add successfully");
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchIndustry = async () => {
      const { data } = await JobAPI.loadIndustry();
      setIndustry(data);
    };
    fetchIndustry();
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
              <div className="flex ">
                <div className="mx-32">
                  <div className="formInput">
                    <label>Company name</label>
                    <input
                      ref={companyName}
                      type="text"
                      placeholder="FPT Software"
                    />
                  </div>
                  <div className="formInput">
                    <label>Industry</label>
                    <select
                      name="myName"
                      className="select"
                      id="myId"
                      ref={selectRef}
                    >
                      {industry?.map((data, index) => {
                        return (
                          <option key={index} value={data?.id}>
                            {data?.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="mx-32 flex flex-col">
                  <div className="formInput">
                    <label>Description</label>
                    <textarea
                      ref={description}
                      type="text"
                      className="border px-4 py-2 rounded-md"
                      style={{ width: "600px", height: "300px" }}
                      placeholder="description"
                    />
                  </div>
                  <button className="px-16 py-4 bg-[#F36522] rounded-md text-white w-1/3 justify-end">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
