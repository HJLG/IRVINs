import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Homepage = () => {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3003/api/products";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("products data", res.data.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const allProducts = products.map((data) => {
    return (
      <div>
        <Link to={`/${data._id}`}>{data.name}</Link>
      </div>
    );
  });

  return (
    <>
      <div>{allProducts}</div>
      <br />
      <button>
        <a href="/create"> Create new product </a>
      </button>
    </>
  );
};

export default Homepage;
