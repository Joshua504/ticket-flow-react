import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TicketManagement from "./pages/TicketManagement";
import Login from "./pages/Login";
import { Routes, Route } from "react-router";
import "./App.scss";

function App() {
return (
<>
<Nav />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
 <Route path="/tickets" element={
  <ProtectedRoute>
    <TicketManagement />
  </ProtectedRoute>
} />
 <Route path="/auth/login" element={<Login />} />
 </Routes>
  <Footer />
   </>
  );
}

export default App;
