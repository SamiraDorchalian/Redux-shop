import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";

// import { useCart } from "../context/CartProvider";

import styles from "./Layout.module.css";

function Layout({ children }) {
  // const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shop-react</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartBold />
            {/* {!!state.itemsCounter && <span>{state.itemsCounter}</span>} */}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Samira with 🌻</p>
      </footer>
    </>
  );
}

export default Layout;
