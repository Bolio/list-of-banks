import React from "react";
import TableBodyData from "..";
import { render } from "@testing-library/react";

describe("TableHeader component", () => {
  const keyOrder = ["bankName", "description", "age", "url"];
  const data = [
    {
      bankName: "BANCO PRUEBA",
      description: "WERWERQWERQWERQWERQWER",
      age: 10,
      url: "https://banco.png",
    },
    {
      bankName: "OTRO banco PRUEBA",
      description: "bmnbnmbnmbmnbmn",
      age: 20,
      url: "https://banco2.png",
    },
  ];

  const component = <TableBodyData keyOrder={keyOrder} data={data} />;

  test("Should render the body of the table with data", () => {
    const { getByText } = render(component);
    expect(getByText("BANCO PRUEBA")).toBeInTheDocument();
    expect(getByText("OTRO banco PRUEBA")).toBeInTheDocument();
  });
});
