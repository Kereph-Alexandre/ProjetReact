import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import EmployeeData from "../../Data/Mock_data.json";

/**
 * Affiche la liste des employés enregistrés et filtre en fonction des caractères renseignés
 * @param {*} searchInput la chaine de caractère définissant la recherche
 * @returns la liste des employés affichés
 */
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
