import styles from "../styles/footer.module.scss";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";

const Footer = () => {
 return (
  <>
   <footer className={styles.footer}>
    <section className={styles.footer_con}>
     <div>
      <h1>zenDesk</h1>
     </div>
     <section className={styles.socials}>
      <div>
       <img src={facebook} alt="" />
      </div>
      <div>
       <img src={twitter} alt="" />
      </div>
      <div>
       <img src={github} alt="" />
      </div>
     </section>
    </section>
    <div className={styles.copy}>
     <p>© 2023 zenDesk. All rights reserved.</p>
    </div>
   </footer>
  </>
 );
};

export default Footer;
