import React from "react";
import TableHeader from "..";
import { render } from "@testing-library/react";

describe("TableHeader component", () => {
  const columnNames = ["Hola", "Mundo", "Desde", "TableHeader", "Test"];
  const component = <TableHeader columnNames={columnNames} />;

  test("Should render the header of a table", () => {
    const { getByText } = render(component);
    expect(getByText("Hola")).toBeInTheDocument();
    expect(getByText("TableHeader")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
  });
});
