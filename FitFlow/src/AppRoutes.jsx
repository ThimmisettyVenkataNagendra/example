import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import UsersList from "./pages/UsersList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/users" element={<UsersList />} /> {/* Admin page to see users */}
    </Routes>
  );
}
