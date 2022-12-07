import EmployeeProfile from "../EmployeeProfile/EmployeeProfile";

export default function EmployeeListItem(employee) {
  const seeProfile = () => <EmployeeProfile employee={employee} />;
  return (
    <>
      <h2>
        {employee.last_name}
        {employee.first_name}
      </h2>

      <p>{employee.job_title}</p>
      <button onClick={seeProfile}>Voir le profil</button>
    </>
  );
}
