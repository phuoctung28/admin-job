import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BasicModal from "../../Modal";
import JobAPI from "../../../services/job";
export const SemesterTable = ({ datas }) => {
  // const
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const fetchStudent = async () => {
      const { data } = await JobAPI.loadUser();
      setStudent(data);
    };
    fetchStudent();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <BasicModal name="Add student" modalTitle="Student List" data={student} />

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Student name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Student Major</TableCell>
            <TableCell className="tableCell">CV</TableCell>
            {/* <TableCell className="tableCell">Job Summary</TableCell> */}
            {/* <TableCell className="tableCell">Salary</TableCell> */}
            {/* <TableCell className="tableCell">Work Location</TableCell> */}
            {/* <TableCell className="tableCell">Date Published</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {datas?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row?.student?.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row?.student?.name}</div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row?.email}</div>
              </TableCell>
              <TableCell className="tableCell">
                {row?.student?.major?.id}
              </TableCell>
              <TableCell className="tableCell">
                {row?.cvFile === null ? (
                  <p>No CV</p>
                ) : (
                  <a
                    target="_blank"
                    className="border-orange-300 border p-1 px-4 hover:bg-orange-300 hover:text-white rounded-md"
                    href={row?.cvFile}
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
