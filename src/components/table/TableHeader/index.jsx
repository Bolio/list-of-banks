import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader = ({ columnNames = [] }) => {
  return (
    <TableHead>
      <TableRow>
        {columnNames.map((column, index) => (
          <TableCell key={index}>{column}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
