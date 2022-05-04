import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableBodyData = ({ data = [], keyOrder = [] }) => {
  return (
    <TableBody>
      {data.map((info, index) => (
        <TableRow key={index}>
          {keyOrder.map((key, index) => (
            <TableCell key={index}>
              {key === "url" ? (
                <img src={info[key]} width={96} height={96} />
              ) : (
                info[key]
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyData;
