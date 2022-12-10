import { useState } from "react";

import EmployeeList from "../Components/EmployeeList/EmployeeList";

import SearchBar from "../Components/SearchBar/SearchBar";

export default function EmployeeListPage() {
  const [searchInput, setSearchInput] = useState("");

  /**
   * Met a jour la chaine de caractère recherchée
   * @param {*} element
   */
  const searchChange = (element) => {
    element.preventDefault();
    setSearchInput(element.target.value);
  };

  return (
    <>
      <h1>Liste des Employés</h1>

      <SearchBar searchInput={searchInput} searchChange={searchChange} />
      <EmployeeList searchInput={searchInput} />
    </>
  );
}
