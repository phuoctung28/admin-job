import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import SelectLabels from "../../components/dropdown";

const New = ({ inputs, title }) => {
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // e.target.map((data) => 
    //   console.log(data.value)
    // )
    console.log(e.target[0]);
    console.log(typeof e.target);
  }
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
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "dropdown" ? (
                    <SelectLabels />
                  ) : (
                    <input type={input.type} placeholder={input.placeholder} />
                  )}
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
