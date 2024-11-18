import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import { useProducts } from "../context/ProductContext";
import { fetchProducts } from "../features/product/prouductSlice";

import Card from "./../components/Card";
import Loader from "./../components/Loader";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  // const products = useProducts();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  const store = useSelector((store) => store.product);
  console.log(store);

  // const products = [];

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {/* {!displayed.length && <Loader />} */}
          {loading && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
