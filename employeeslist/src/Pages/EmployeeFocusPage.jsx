import { useState } from "react";
import EmployeeProfile from "../Components/EmployeeProfile/EmployeeProfile";
import EmployeeData from "../Data/Mock_data.json";

export default function EmployeeFocusPage() {
  const [employeeIndex, setEmployeeIndex] = useState(0);

  const focus = EmployeeData[employeeIndex];
  return (
    <>
      <EmployeeProfile focus={focus} />
    </>
  );

  //Un page de profile
  //Un bouton avant
  //Un bouton après
}
