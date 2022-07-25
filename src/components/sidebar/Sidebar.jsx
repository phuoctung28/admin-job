import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IntegrationInstructions } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div style={{ textDecoration: "none" }}>
          <span className="logo">OJT Portal</span>
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/companies" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Companies</span>
            </li>
          </Link>
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Jobs</span>
            </li>
          </Link>
          <Link to="/semesters" style={{ textDecoration: "none" }}>
            <li>
              <IntegrationInstructions className="icon" />
              <span>Semesters</span>
            </li>
          </Link>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
