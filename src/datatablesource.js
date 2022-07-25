import moment from "moment";

export const userColumns = [
  {
    field: "student",
    headerName: "Student ID",
    width: 120,
    renderCell: (params) => {
      return <div>{params?.row?.student?.id}</div>;
    },
    valueGetter: (params) => {
      return `${params?.row?.student?.id}`;
    },
  },
  {
    field: "row.student.name",
    headerName: "Student Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg "
            src="https://img.icons8.com/bubbles/50/000000/user.png"
            alt="avatar"
          />
          {params?.row?.student?.name}
        </div>
      );
    },
    valueGetter: (params) => {
      return `${params?.row?.student?.name}`;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "major",
    headerName: "Major",
    width: 100,
    renderCell: (params) => {
      return <div>{params?.row?.student?.major?.id}</div>;
    },
    valueGetter: (params) => {
      return `${params?.row?.student?.major?.id}`;
    },
  },
  {
    field: "semester",
    headerName: "Semester",
    width: 160,
    renderCell: (params) => {
      return <div>{params?.row?.student?.semester?.id}</div>;
    },
    valueGetter: (params) => {
      return `${params?.row?.student?.semester?.id}`;
    },
  },
  {
    field: "CV",
    headerName: "CV File",
    width: 160,
    renderCell: (params) => {
      return (
        <>
          {params?.row?.cvFile === null ? (
            <>No CV</>
          ) : (
            <a
              target="_blank"
              className="border-orange-300 border p-1 hover:bg-orange-300 hover:text-white rounded-md"
              href={params?.row?.cvFile}
              rel="noopener noreferrer"
            >
              View CV
            </a>
          )}
        </>
      );
    },
    valueGetter: (params) => {
      return `${params?.row?.cvFile}`;
    },
  },
];
export const companyColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Company",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg "
            src="https://img.icons8.com/bubbles/50/000000/company.png"
            alt="avatar"
          />
          {params?.row?.name}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "industry",
    headerName: "Industry",
    width: 200,
    renderCell: (params) => {
      return <div>{params?.row?.industry?.name}</div>;
    },
    valueGetter: (params) => {
      return `${params?.row?.industry?.name}`;
    },
  },
];
export const jobColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "jobTitle",
    headerName: "Job",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg "
            src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="avatar"
          />
          {params?.row?.jobTitle}
        </div>
      );
    },
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 200,
  },
  {
    field: "company",
    headerName: "Company",
    width: 400,
    renderCell: (params) => {
      return <p>{params?.row?.company?.name}</p>;
    },
  },
];
export const semesterColumns = [
  { field: "id", headerName: "Semester ID", width: 120 },
  {
    field: "semester",
    headerName: "Semester name",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg "
            src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-calendar-calendar-kmg-design-flat-kmg-design-18.png"
            alt="avatar"
          />
          {params?.row?.name}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 200,
    renderCell: (params) => {
      return (
        <p>
          {params?.row?.startDate
            ?.split("T")[0]
            ?.split("-")
            ?.reverse()
            ?.join("-")}
        </p>
      );
    },
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 200,
    renderCell: (params) => {
      return (
        <p>
          {params?.row?.endDate
            ?.split("T")[0]
            ?.split("-")
            ?.reverse()
            ?.join("-")}
        </p>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          {moment().isAfter(params?.row?.endDate) ? (
            <p style={{ color: "red" }}>Closed</p>
          ) : moment().isBefore(params?.row?.startDate) ? (
            <p style={{ color: "orange" }}>Not started</p>
          ) : (
            <p style={{ color: "green" }}>Active</p>
          )}
        </>
      );
    },
  },
];
