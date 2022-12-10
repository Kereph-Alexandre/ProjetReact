/**
 * Affiche les informations pertinentes relative a l'employé
 * @param {*} param0 l'employé selectionné
 * @returns le nom, prénom, emploi
 */
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
