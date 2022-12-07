import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import EmployeeListPage from "./Pages/EmployeeListPage";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ul>
        <Link to="/">Accueil</Link>
        <Link to="/EmployeeList">Nos Collaborateurs</Link>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmployeeList" element={<EmployeeListPage />} />
      </Routes>
    </>
  );
}

export default App;
