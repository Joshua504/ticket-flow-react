import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getCurrentUser, logout } from "../utils/auth";
import Toast from "../components/Toast";
import styles from "../styles/ticketManagement.module.scss";

const TicketManagement = () => {
 const navigate = useNavigate();
 const [user, setUser] = useState(null);
 const [tickets, setTickets] = useState([]);
 const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
 const [editingTicket, setEditingTicket] = useState(null);
 const [toast, setToast] = useState(null);
 const [formData, setFormData] = useState({
  title: "",
  description: "",
  priority: "medium",
  status: "open",
 });
 const [errors, setErrors] = useState({});

 useEffect(() => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
   navigate("/login");
   return;
  }
  setUser(currentUser);

  // Load tickets from localStorage (simulating API)
  const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
  setTickets(storedTickets);
 }, [navigate]);

 const showToast = (message, type) => {
  setToast({ message, type });
 };

 const validateForm = () => {
  const newErrors = {};
  if (!formData.title.trim()) newErrors.title = "Title is required";
  if (!formData.description.trim())
   newErrors.description = "Description is required";
  if (formData.title.length > 100)
   newErrors.title = "Title must be less than 100 characters";
  if (formData.description.length > 500)
   newErrors.description = "Description must be less than 500 characters";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const saveTickets = (newTickets) => {
  localStorage.setItem("tickets", JSON.stringify(newTickets));
  setTickets(newTickets);
 };

 const handleCreateTicket = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const newTicket = {
   id: Date.now().toString(),
   ...formData,
   createdAt: new Date().toISOString(),
   updatedAt: new Date().toISOString(),
  };

  const newTickets = [...tickets, newTicket];
  saveTickets(newTickets);
  setFormData({
   title: "",
   description: "",
   priority: "medium",
   status: "open",
  });
  setIsCreateFormOpen(false);
  showToast("Ticket created successfully!", "success");
 };

 const handleEditTicket = (ticket) => {
  setEditingTicket(ticket);
  setFormData({
   title: ticket.title,
   description: ticket.description,
   priority: ticket.priority,
   status: ticket.status,
  });
  setErrors({});
 };

 const handleUpdateTicket = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const updatedTickets = tickets.map((ticket) =>
   ticket.id === editingTicket.id
    ? { ...ticket, ...formData, updatedAt: new Date().toISOString() }
    : ticket
  );
  saveTickets(updatedTickets);
  setEditingTicket(null);
  setFormData({
   title: "",
   description: "",
   priority: "medium",
   status: "open",
  });
  showToast("Ticket updated successfully!", "success");
 };

 const handleDeleteTicket = (ticketId) => {
  if (window.confirm("Are you sure you want to delete this ticket?")) {
   const filteredTickets = tickets.filter((ticket) => ticket.id !== ticketId);
   saveTickets(filteredTickets);
   showToast("Ticket deleted successfully!", "success");
  }
 };

 const handleLogout = () => {
  logout();
  navigate("/login");
 };

 const resetForm = () => {
  setFormData({
   title: "",
   description: "",
   priority: "medium",
   status: "open",
  });
  setErrors({});
  setIsCreateFormOpen(false);
  setEditingTicket(null);
 };

 const getStatusColor = (status) => {
  switch (status) {
   case "open":
    return "#ff9800";
   case "in-progress":
    return "#2196f3";
   case "resolved":
    return "#4caf50";
   case "closed":
    return "#9e9e9e";
   default:
    return "#9e9e9e";
  }
 };

 const getPriorityColor = (priority) => {
  switch (priority) {
   case "high":
    return "#f44336";
   case "medium":
    return "#ff9800";
   case "low":
    return "#4caf50";
   default:
    return "#9e9e9e";
  }
 };

 if (!user) return null;

 return (
  <div className={styles.container}>
   <header className={styles.header}>
    <h1>Ticket Management</h1>
    <button onClick={handleLogout} className={styles.logoutBtn}>
     Logout
    </button>
   </header>

   <div className={styles.content}>
    <div className={styles.actions}>
     <button
      onClick={() => setIsCreateFormOpen(true)}
      className={styles.createBtn}
     >
      Create New Ticket
     </button>
    </div>

    {(isCreateFormOpen || editingTicket) && (
     <form
      onSubmit={editingTicket ? handleUpdateTicket : handleCreateTicket}
      className={styles.form}
     >
      <h2>{editingTicket ? "Edit Ticket" : "Create New Ticket"}</h2>

      <div className={styles.formGroup}>
       <label htmlFor="title">Title *</label>
       <input
        id="title"
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className={errors.title ? styles.error : ""}
       />
       {errors.title && (
        <span className={styles.errorText}>{errors.title}</span>
       )}
      </div>

      <div className={styles.formGroup}>
       <label htmlFor="description">Description *</label>
       <textarea
        id="description"
        value={formData.description}
        onChange={(e) =>
         setFormData({ ...formData, description: e.target.value })
        }
        rows={4}
        className={errors.description ? styles.error : ""}
       />
       {errors.description && (
        <span className={styles.errorText}>{errors.description}</span>
       )}
      </div>

      <div className={styles.formRow}>
       <div className={styles.formGroup}>
        <label htmlFor="priority">Priority</label>
        <select
         id="priority"
         value={formData.priority}
         onChange={(e) =>
          setFormData({ ...formData, priority: e.target.value })
         }
        >
         <option value="low">Low</option>
         <option value="medium">Medium</option>
         <option value="high">High</option>
        </select>
       </div>

       <div className={styles.formGroup}>
        <label htmlFor="status">Status</label>
        <select
         id="status"
         value={formData.status}
         onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
         <option value="open">Open</option>
         <option value="in-progress">In Progress</option>
         <option value="resolved">Resolved</option>
         <option value="closed">Closed</option>
        </select>
       </div>
      </div>

      <div className={styles.formActions}>
       <button type="submit" className={styles.submitBtn}>
        {editingTicket ? "Update Ticket" : "Create Ticket"}
       </button>
       <button type="button" onClick={resetForm} className={styles.cancelBtn}>
        Cancel
       </button>
      </div>
     </form>
    )}

    <div className={styles.ticketsGrid}>
     {tickets.length === 0 ? (
      <div className={styles.emptyState}>
       <p>No tickets found. Create your first ticket!</p>
      </div>
     ) : (
      tickets.map((ticket) => (
       <div key={ticket.id} className={styles.ticketCard}>
        <div className={styles.ticketHeader}>
         <h3 className={styles.ticketTitle}>{ticket.title}</h3>
         <div className={styles.ticketTags}>
          <span
           className={styles.statusTag}
           style={{ backgroundColor: getStatusColor(ticket.status) }}
          >
           {ticket.status}
          </span>
          <span
           className={styles.priorityTag}
           style={{ backgroundColor: getPriorityColor(ticket.priority) }}
          >
           {ticket.priority}
          </span>
         </div>
        </div>

        <p className={styles.ticketDescription}>{ticket.description}</p>

        <div className={styles.ticketMeta}>
         <span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
         {ticket.updatedAt !== ticket.createdAt && (
          <span>
           Updated: {new Date(ticket.updatedAt).toLocaleDateString()}
          </span>
         )}
        </div>

        <div className={styles.ticketActions}>
         <button
          onClick={() => handleEditTicket(ticket)}
          className={styles.editBtn}
         >
          Edit
         </button>
         <button
          onClick={() => handleDeleteTicket(ticket.id)}
          className={styles.deleteBtn}
         >
          Delete
         </button>
        </div>
       </div>
      ))
     )}
    </div>
   </div>

   {toast && (
    <Toast
     message={toast.message}
     type={toast.type}
     onClose={() => setToast(null)}
    />
   )}
  </div>
 );
};

export default TicketManagement;
