import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./component/pages/developer/settings/users/roles/Roles";
import Users from "./component/pages/developer/settings/users/Users";

function App() {
  Routes;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/users/roles" element={<Roles />} />
          <Route path="/settings/users/system" element={<Roles />} />
          <Route path="/settings/users/other" element={<Roles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
