export default function EmployeeListItem(employee) {
  return (
    <>
      <h2>
        {employee.last_name}
        {employee.first_name}
      </h2>

      <p>{employee.job_title}</p>
      <button>Voir le profil</button>
    </>
  );
}
