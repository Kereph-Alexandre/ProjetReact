import data from "../../Data/Mock_data.json";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

export default function EmployeeList() {
  return (
    <>
      {data.map((employee) => (
        <EmployeeListItem {...employee} />
      ))}
    </>
  );
}
