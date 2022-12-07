export default function EmployeeProfile(employee) {
  return (
    <>
      <header>
        <h1>
          {employee.first_name}, {employee.last_name}
        </h1>
      </header>
    </>
  );
}
