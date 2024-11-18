import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";

// import { useCart } from "../context/CartProvider";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";

import { shortenText, productQuantity } from "../helper/helper";

import styles from "./Card.module.css";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const { id, title, image, price } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(state);

  // const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  // const clickHandler = (type) => {
  //   dispatch({ type, payload: data });
  // };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            // <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            // <button onClick={() => clickHandler("DECREASE")}>-</button>
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            // <button onClick={() => clickHandler("ADD_ITEM")}>
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            // <button onClick={() => clickHandler("INCREASE")}>+</button>
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
