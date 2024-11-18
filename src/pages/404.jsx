import { Link } from "react-router-dom";

import styles from "./PageNotFound.module.css";
import imageNotFound from "../images/page-not-found.png";

function PageNotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.image}>
        <img src={imageNotFound} alt="Page Not Found" />
      </div>
      <div className={styles.text}>
        <p>Page Not Found</p>
        <Link to="/products">Back To Shop</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
