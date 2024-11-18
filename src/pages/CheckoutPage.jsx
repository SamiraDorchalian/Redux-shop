// import { useCart } from "../context/CartProvider";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import BasketCard from "./../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";

import empty from "../images/image-checkout-empty.png";

function CheckoutPage() {
  // const [state, dispatch] = useCart();

  const state = useSelector((store) => store.cart);

  // const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.conatiner}>
        <div className={styles.empty}>
          <img src={empty} alt="empty" />
          <div className={styles.text}>
            <p>Your shopping page is empty (´。＿。｀) </p>
            <Link to="/products">Back To Shop</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.conatiner}>
      {/* <BasketSidebar state={state} clickHandler={clickHandler} /> */}
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            // clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
