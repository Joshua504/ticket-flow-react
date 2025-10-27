import { useState } from "react";
import styles from "../styles/login.module.scss"
import Logincomp from "../components/Logincomp"
import Signupcomp from "../components/Signupcomp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

 return (
  <>
   <section className={styles.login}>
    <div className={styles.login__logo}></div>
    <div className={styles.login__forms}>
     {isLogin ? <Logincomp onSwitch={() => setIsLogin(false)} /> : <Signupcomp onSwitch={() => setIsLogin(true)} />}
    </div>
   </section>
  </>
 );
};

export default Login;
