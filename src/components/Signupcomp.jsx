import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/longincomp.module.scss";
import { signup } from "../utils/auth";
import Toast from "./Toast";

const Signupcomp = ({ onSwitch }) => {
 const [formData, setFormData] = useState({
  email: "",
  password: "",
  confirmPassword: "",
 });
 const [errors, setErrors] = useState({});
 const [toast, setToast] = useState(null);
 const navigate = useNavigate();

 const validateForm = () => {
  const newErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email) newErrors.email = "Email is required";
  else if (!emailRegex.test(formData.email))
   newErrors.email = "Invalid email format";
  if (!formData.password) newErrors.password = "Password is required";
  else if (formData.password.length < 6)
   newErrors.password = "Password must be at least 6 characters";
  if (!formData.confirmPassword)
   newErrors.confirmPassword = "Confirm password is required";
  else if (formData.password !== formData.confirmPassword)
   newErrors.confirmPassword = "Passwords do not match";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  if (errors[e.target.name]) {
   setErrors({ ...errors, [e.target.name]: "" });
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  try {
   await signup(formData.email, formData.password);
   setToast({ message: "Signup successful!", type: "success" });
   setTimeout(() => navigate("/dashboard"), 1000);
  } catch (error) {
   setToast({ message: error.message, type: "error" });
  }
 };

 return (
  <>
   <form onSubmit={handleSubmit} className={styles.form}>
    <h1 className={styles.form__title}>create an account</h1>
    <div className={styles.form__container}>
     <input
      type="email"
      name="email"
      placeholder="Email"
      className={styles.input}
      value={formData.email}
      onChange={handleChange}
     />
     {errors.email && <span className={styles.error}>{errors.email}</span>}
     <input
      type="password"
      name="password"
      placeholder="Password"
      className={styles.input}
      value={formData.password}
      onChange={handleChange}
     />
     {errors.password && (
      <span className={styles.error}>{errors.password}</span>
     )}
     <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm-Password"
      className={styles.input}
      value={formData.confirmPassword}
      onChange={handleChange}
     />
     {errors.confirmPassword && (
      <span className={styles.error}>{errors.confirmPassword}</span>
     )}
     <button type="submit" className={styles.button}>
      signup
     </button>
    </div>
    <div className={styles.switch_con}>
    <p>or</p> <p className={styles.switch} onClick={onSwitch}>login</p>
    </div>
   </form>
   {toast && (
    <Toast
     message={toast.message}
     type={toast.type}
     onClose={() => setToast(null)}
    />
   )}
  </>
 );
};

export default Signupcomp;
