import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

export default function BasicModal({ name, modalTitle, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onAdd = (id) => {
    console.log(id);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "full",
    bgcolor: "background.paper",
    border: "2px solid #ffffff",
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
  };
  return (
    <div>
      <button
        className="flex border border-[#F36522] py-2 px-4 rounded-md hover:bg-[#F36522] hover:text-white ml-auto my-2"
        onClick={handleOpen}
      >
        {name}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Student ID</TableCell>
                  <TableCell>Student name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Major</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row?.student?.id}</TableCell>
                    <TableCell>
                      <div>{row?.student?.name}</div>
                    </TableCell>
                    <TableCell>
                      <div>{row?.email}</div>
                    </TableCell>
                    <TableCell>{row?.student?.major?.id}</TableCell>
                    <TableCell>
                      <button
                        className="border rounded-md p-2 border-[#F36522] hover:bg-[#F36522] hover:text-white"
                        onClick={() => onAdd(row?.student?.id)}
                      >
                        Add to semester
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <button
                onClick={handleClose}
                className="bg-[#F36522] mt-14 text-white py-2 px-4 flex rounded-md"
              >
                Save changes
              </button>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
