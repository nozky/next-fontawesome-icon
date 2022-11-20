import styles from "../styles/Home.module.css";

// import Font Awesome component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// now import the icons you want
import {
  faEnvelope,
  faHeart,
  faHouse,
  faCartShopping,
  faUser,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Tatiana! </h1>
      <p>Sample font Awesome Icons</p>

      {/* Pass the icon as a props to FontAwesomeIcon like this */}
      {/* note: to change the size of the icon, use the fontSize css property. */}
      <div className={styles.icons}>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        <FontAwesomeIcon className={styles.icon} icon={faHouse} />
        <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        <FontAwesomeIcon className={styles.icon} icon={faSmile} />
      </div>
    </div>
  );
}
