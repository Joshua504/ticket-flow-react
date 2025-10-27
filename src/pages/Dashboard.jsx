
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { getCurrentUser, logout } from "../utils/auth";
import styles from "../styles/dashboard.module.scss";

const Dashboard = () => {
 const navigate = useNavigate();
 const [user, setUser] = useState(null);
 const [stats, setStats] = useState({
  total: 0,
  open: 0,
  resolved: 0,
 });

 useEffect(() => {
 const currentUser = getCurrentUser();
 setUser(currentUser);

 // Calculate stats from localStorage
 const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
 const total = tickets.length;
  const open = tickets.filter((ticket) => ticket.status === "open").length;
 const resolved = tickets.filter(
  (ticket) => ticket.status === "resolved"
 ).length;

 setStats({ total, open, resolved });
 }, []);

 const handleLogout = () => {
 logout();
  navigate("/auth/login");
 };

 return (
  <div className={styles.container}>
   <header className={styles.header}>
    <h1>Dashboard</h1>
    <button onClick={handleLogout} className={styles.logoutBtn}>
     Logout
    </button>
   </header>

   <div className={styles.stats}>
    <div className={styles.statCard}>
     <h3>Total Tickets</h3>
     <p className={styles.statNumber}>{stats.total}</p>
    </div>
    <div className={styles.statCard}>
     <h3>Open Tickets</h3>
     <p className={styles.statNumber}>{stats.open}</p>
    </div>
    <div className={styles.statCard}>
     <h3>Resolved Tickets</h3>
     <p className={styles.statNumber}>{stats.resolved}</p>
    </div>
   </div>

   <div className={styles.actions}>
    <Link to="/tickets" className={styles.ticketLink}>
     Go to Ticket Management
    </Link>
   </div>
  </div>
 );
};

export default Dashboard;
