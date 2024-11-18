// import { useCart } from "../context/CartProvider";
import { useSelector } from "react-redux";

import BasketCard from "./../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  // const [state, dispatch] = useCart();

  const state = useSelector((store) => store.cart);

  // const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.conatiner}>
        <p>Empty</p>
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
