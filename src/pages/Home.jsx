import styles from "../styles/home.module.scss";
import { Link } from "react-router";
import plus from "../assets/icons/plus.svg";
import robot from "../assets/icons/robot.svg";
import collaboration from "../assets/icons/collaboration.svg";
import analytics from "../assets/icons/analytics.svg";
import av_1 from "../assets/img/av-1.png";
import av_2 from "../assets/img/av-2.png";
import av_3 from "../assets/img/Blue Background.gif";


const Home = () => {
 return (
  <>
   <header className={styles.header}>
    <div className={styles.header_card}>
     <h1>ZenDesk</h1>
     <img src={av_3} alt="" />
    </div>
    <div className={styles.header_text}>
     <p>
      Effortlessly manage, track, and resolve tickets with Ticket Flow—your
      all-in-one solution for streamlined support, seamless collaboration, and
      boosted productivity. Simplify your workflow and keep your team and
      customers happy!
     </p>
     <section className={styles.cta_section}>
     <Link className={styles.cta} to="/auth/login">
     Get started
     </Link>
     <Link className={styles.cta} to="/auth/login">
     Login
     </Link>
     </section>
    </div>
    <div className={styles.block}></div>
    <div className={styles.circle}></div>
   </header>

   <main className={styles.main}>
    <div className={styles.feature}>
     <h2>Powerful features, Effortless workflow</h2>
     <p>Discover the tools that will revolutionize your support process.</p>
     <section className={styles.feature_card_section}>
      <div className={styles.feature_card}>
       <div className={styles.card_icon}>
        <img src={plus} alt="" />
       </div>
       <h3>Effortless Ticket Creation</h3>
       <p>
        Quickly create and assign tickets with our streamlined interface,
        ensuring no customer query gets lost.
       </p>
      </div>

      <div className={styles.feature_card}>
       <div className={styles.card_icon}>
        <img src={robot} alt="" />
       </div>
       <h3>smart priotization</h3>
       <p>
        automate ticket routing and priotization based on custom rules to focus
        on what matters most
       </p>
      </div>

      <div className={styles.feature_card}>
       <div className={styles.card_icon}>
        <img src={collaboration} alt="" />
       </div>
       <h3>Collaborative workspace</h3>
       <p>
        Easily collaborate with your team in real-time, ensuring that everyone
        is on the same page and working towards the same goals.
       </p>
      </div>

      <div className={styles.feature_card}>
       <div className={styles.card_icon}>
        <img src={analytics} alt="" />
       </div>
       <h3>Analytics and Reporting</h3>
       <p>
        Gain valuable insights into your teams performance and customer
        satisfaction with our comprehensive reporting tools
       </p>
      </div>
     </section>
    </div>

    <div className={styles.testimonial}>
     <h2>Loved by Teams Worldwide</h2>
     <p>Don't just take our word for it. Here's what our users are saying.</p>
     <section className={styles.testimonial_section}>
      <div className={styles.testimonial_card}>
       <p className={styles.test_text}>
        "I've been using this tool for a few months now, and it has made a huge
        difference in how we handle customer support. The intuitive interface
        and powerful features have streamlined our workflow, allowing us to
        respond to tickets faster and more efficiently. "
       </p>
       <div className={styles.user_info}>
        <div className={styles.avatar}>
          <img src={av_1} alt="" />
        </div>
        <div>
         <h3>John Doe</h3>
         <p>CEO, ABC Corp</p>
        </div>
       </div>
      </div>

      <div className={styles.testimonial_card}>
       <p className={styles.test_text}>
        "After several months of using this tool, I’ve noticed a remarkable
        improvement in our customer support process. Its user-friendly design
        and robust features have truly optimized our workflow, enabling us to
        address tickets swiftly and with greater accuracy."
       </p>
       <div className={styles.user_info}>
        <div className={styles.avatar}>
         <img src={av_2} alt="" />
        </div>
        <div>
         <h3>0x anon</h3>
         <p>CEO, ABC Corp</p>
        </div>
       </div>
      </div>
     </section>
    </div>
   </main>
  </>
 );
};

export default Home;
