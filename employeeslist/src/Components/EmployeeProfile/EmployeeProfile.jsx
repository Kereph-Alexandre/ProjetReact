export default function EmployeeProfile({ focus }) {
  return (
    <>
      <h2>
        {focus.first_name} {focus.last_name}
      </h2>
      <p>{focus.job_title}</p>
    </>
  );
}
