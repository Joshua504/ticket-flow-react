import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
<Route path="/dashboard" element={<Dashboard />} />
 <Route path="/tickets" element={<TicketManagement />} />
 <Route path="/login" element={<Login />} />
 </Routes>
  <Footer />
   </>
  );
}

export default App;
