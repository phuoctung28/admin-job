import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

export const CompanyTable = ({ datas }) => {
  console.log(datas);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Job ID</TableCell>
            <TableCell className="tableCell">Job Title</TableCell>
            <TableCell className="tableCell">Job Summary</TableCell>
            <TableCell className="tableCell">Salary</TableCell>
            <TableCell className="tableCell">Work Location</TableCell>
            <TableCell className="tableCell">Date Published</TableCell>
            {/* <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {datas?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row.jobTitle}</div>
              </TableCell>
              <TableCell className="tableCell">{row.jobSummary}</TableCell>
              <TableCell className="tableCell">{row.salary}</TableCell>

              <TableCell className="tableCell">
                <span>{row.workLocation}</span>
              </TableCell>
              <TableCell className="tableCell">
                {row.datePublished
                  ?.split("T")[0]
                  ?.split("-")
                  ?.reverse()
                  ?.join("-")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
