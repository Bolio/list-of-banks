import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Divider from "@mui/material/Divider";

import TableHeader from "../../components/table/TableHeader";
import TableBodyData from "../../components/table/TableBodyData";
import MainTitle from "../../components/title/MainTitle";
import { fetchInformationBanksThunk } from "../../redux/modules/listBanks";

function ListBanks() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInformationBanksThunk());
  }, []);

  const columnNames = ["Bank name", "Description", "Age", "Image"];
  const data = useSelector((state) => state.banks.listBanks);
  const keyOrder = ["bankName", "description", "age", "url"];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <MainTitle
          text={"List of Banks 🏦"}
          align={"center"}
          variant={"h3"}
          gutterBottom={true}
        />
        <Divider />

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHeader columnNames={columnNames} />
            <TableBodyData data={data} keyOrder={keyOrder} />
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default ListBanks;
