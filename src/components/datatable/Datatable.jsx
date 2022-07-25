import "./datatable.scss";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import {
  companyColumns,
  companyRow,
  jobColumn,
  semesterColumns,
  userColumns,
} from "../../datatablesource";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import JobAPI from "../../services/job";

const Datatable = () => {
  const [datas, setDatas] = useState([]);

  const [columnType, setColumnType] = useState(null);

  let location = useLocation();
  const pathname = useMemo(() => {
    if (location.pathname === "/companies") {
      setColumnType(companyColumns);
    } else if (location.pathname === "/jobs") {
      setColumnType(jobColumn);
    } else if (location.pathname === "/semesters") {
      setColumnType(semesterColumns);
    } else if (location.pathname === "/users") {
      setColumnType(userColumns);
    }
    return location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    const loadJob = async () => {
      const { data } = await JobAPI.loadJob();
      setDatas(data);
    };
    const loadCompany = async () => {
      const { data } = await JobAPI.loadCompany();
      setDatas(data);
    };
    const loadSemester = async () => {
      const { data } = await JobAPI.loadSemester();
      setDatas(data);
    };
    const loadUser = async () => {
      const { data } = await JobAPI.loadUser();
      // console.log(data);
      setDatas(data);
    };
    if (pathname === "/companies") {
      loadCompany();
    } else if (pathname === "/jobs") {
      loadJob();
    } else if (pathname === "/semesters") {
      loadSemester();
    } else if (pathname === "/users") {
      loadUser();
    }
    return () => {
      console.log("Log o day", datas);
    };
  }, [pathname]);
  // const onDeleteCourseConfirm = async (id) => {
  //   try {
  //     await courseApi.delete(id);
  //     const data = await courseApi.getAll();
  //     setCourses(data.data.courses);
  //     message.success("Course is deleted successfully!");
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  const onDeleteCompany = async (id) => {
    try {
      await JobAPI.deleteCompany(id);
      const { data } = await JobAPI.loadCompany();
      setDatas(data);
      alert("Delete successfully");
    } catch (error) {
      console.log(error);
    }
    console.log(id, "company");
  };
  const onDeleteJob = async (id) => {
    // try {
    //   await JobAPI.deleteCompany(id);
    //    const data
    //   setDatas(datas.filter((item) => item.id !== id));
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(id, "job");
  };
  const onDeleteUser = async (id) => {
    // try {
    //   await JobAPI.deleteCompany(id);
    //    const data
    //   setDatas(datas.filter((item) => item.id !== id));
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(id, "user");
  };
  const onDeleteHandler = async (id) => {
    if (pathname.includes("companies")) {
      return onDeleteCompany(id);
    } else if (pathname.includes("jobs")) {
      return onDeleteJob(id);
    } else if (pathname.includes("users")) {
      return onDeleteUser(id);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`${pathname}/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              {pathname !== "/jobs" ? (
                <div className="viewButton">View</div>
              ) : (
                <></>
              )}
            </Link>
            <div
              className="deleteButton"
              onClick={() => onDeleteHandler(params?.row?.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          printOptions={{
            hideFooter: true,
            hideToolbar: true,
            
          }}
        />
      </GridToolbarContainer>
    );
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {pathname !== "/users" ? (
          <Link
            className="link"
            to={{
              pathname: pathname + "/new",
            }}
          >
            Add New
          </Link>
        ) : (
          <></>
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={datas}
        columns={
          columnType !== userColumns
            ? columnType?.concat(actionColumn)
            : columnType
        }
        pageSize={8}
        rowsPerPageOptions={[8]}
        components={{
          Toolbar: CustomToolbar,
        }}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
