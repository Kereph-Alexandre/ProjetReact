import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import EmployeeData from "../../Data/Mock_data.json";

export default function EmployeeList({ searchInput }) {
  const filteredList = EmployeeData.filter((employee) => {
    employee.fullname = employee.first_name + employee.last_name;

    if (searchInput.length > 0) {
      return employee.fullname.toLowerCase().includes(searchInput);
    } else {
      return employee;
    }
  });

  return (
    <>
      {filteredList.map((employee, index) => (
        <EmployeeListItem key={index} {...employee} />
      ))}
    </>
  );
}
