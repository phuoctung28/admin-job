import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import JobAPI from "../../services/job";
import { CompanyTable } from "../../components/table/Company";
import { useNavigate } from "react-router-dom";
import { SemesterTable } from "../../components/table/Semester";
const Single = () => {
  const [info, setInfo] = useState({});
  const [datas, setDatas] = useState([]);
  const { id } = useParams();
  let { pathname } = useLocation();
  let navigate = useNavigate();
  console.log(pathname.includes("companies"));
  console.log(id);
  useEffect(() => {
    const fetchCompanyData = async () => {
      const { data } = await JobAPI.fetchCompanyInfo(id);
      setInfo(data);
    };
    const fetchCompanyJob = async () => {
      const { data } = await JobAPI.fetchCompanyJob(id);
      setDatas([...data]);
    };
    const fetchStudentInSemester = async () => {
      const { data } = await JobAPI.fetchStudentInSemester(id);
      setDatas(data);
    };
    const fetchSemester = async () => {
      const { data } = await JobAPI.fetchSemester(id);
      setInfo(data);
    };
    if (pathname.includes("companies")) {
      fetchCompanyData();
      fetchCompanyJob();
    } else if (pathname.includes("semesters")) {
      fetchStudentInSemester();
      fetchSemester();
    }
  }, [pathname]);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </div>
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={
                  pathname.includes("companies")
                    ? "https://img.icons8.com/bubbles/50/000000/company.png"
                    : "https://img.icons8.com/external-kmg-design-flat-kmg-design/52/000000/external-calendar-calendar-kmg-design-flat-kmg-design-18.png"
                }
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{info?.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{info?.description}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <h1 className="title">{pathname}</h1>
          {pathname.includes("companies") ? (
            <CompanyTable datas={datas} info={info} />
          ) : (
            <SemesterTable datas={datas} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
