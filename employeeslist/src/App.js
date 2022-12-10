import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import EmployeeFocusPage from "./Pages/EmployeeFocusPage";
import EmployeeListPage from "./Pages/EmployeeListPage";

function App() {
  return (
    <>
      <ul>
        <Link to="/">Nos Collaborateurs</Link>
        <Link to="/Focus">Focus</Link>
      </ul>

      <Routes>
        <Route path="/" element={<EmployeeListPage />} />
        <Route path="/Focus" element={<EmployeeFocusPage />} />
      </Routes>
    </>
  );
}

export default App;
