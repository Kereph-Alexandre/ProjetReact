import { Route, Routes } from "react-router";
import EmployeeList from "./Components/EmployeeList/EmployeeList";

function App() {
  return (
    <>
      <EmployeeList />

      <Routes>
        <Route path="/EmployeeList" element={<EmployeeList />} />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
