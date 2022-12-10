import { useState } from "react";
import EmployeeProfile from "../Components/EmployeeProfile/EmployeeProfile";
import EmployeeData from "../Data/Mock_data.json";

export default function EmployeeFocusPage() {
  const [employeeIndex, setEmployeeIndex] = useState(0);

  /**
   * Incrémente l'index de l'employé à afficher & vérifie qu'il ne dépasse pas l'index maximum
   */
  function addOne() {
    setEmployeeIndex(employeeIndex + 1);
    if (employeeIndex >= EmployeeData.length - 1) {
      setEmployeeIndex(0);
    }
  }

  /**
   * Décrémente l'index de l'employé à afficher & s'assure qu'il ne devienne pas négatif
   */
  function substractOne() {
    setEmployeeIndex(employeeIndex - 1);

    if (employeeIndex <= 0) {
      setEmployeeIndex(EmployeeData.length - 1);
    }
  }

  const focus = EmployeeData[employeeIndex];

  return (
    <>
      <EmployeeProfile focus={focus} />
      <button onClick={addOne}>+1</button>
      <button onClick={substractOne}>-1</button>
    </>
  );

  //Un page de profile
  //Un bouton avant
  //Un bouton après
}
