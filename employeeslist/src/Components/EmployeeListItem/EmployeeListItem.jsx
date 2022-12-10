/**
 * Affiche les informations sommaire relative à un employé et un bouton pour afficher son profil
 * @param {*} employee l'employé à ajouter à la liste
 * @returns le nom, prénom, emploi, et un bouton
 */
export default function EmployeeListItem(employee) {
  return (
    <>
      <h2>
        {employee.last_name}
        {employee.first_name}
      </h2>

      <p>{employee.job_title}</p>

      {/* Bouton inactif. A terme : permet de bascurler sur la page de profil de l'employé */}
      <button>Voir le profil</button>
    </>
  );
}
