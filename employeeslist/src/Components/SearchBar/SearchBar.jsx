import { useState } from "react";
import EmployeeData from "../../Data/Mock_data.json";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const searchChange = (element) => {
    element.preventDefault();
    setSearchInput(element.target.value);
  };

  if (searchInput.length > 0) {
    EmployeeData.filter((employee) => {
      employee.fullName = employee.first_name + employee.last_name;
      return employee.fullName.match(searchInput);
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Entrez un nom"
        onChange={searchChange}
        value={searchInput}
      />
    </>
  );
}
