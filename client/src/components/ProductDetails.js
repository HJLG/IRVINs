import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        console.log("product data", res.data.data.currentProduct);
        setProductDetails([res.data.data.currentProduct]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDelete = () => {
      axios
        .delete(`http://localhost:3003/api/products/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    history.push('/')
  };

  const productMap = productDetails.map((data) => {
    return (
      <>
        <div>Product ID: {data._id}</div>
        <div>Product Name : {data.name}</div>
        <div>Created At : {data.createdAt}</div>
        <div>Updated At : {data.updatedAt}</div>
        <div>Price : {data.price}</div>
        <div>Description : {data.description}</div>
        <div>
          Tags :{" "}
          {data.tags.map((data) => {
            return <div>{data}</div>;
          })}
        </div>
        <img src={data.image} alt={data.name} />
      </>
    );
  });
  return (
    <>
      <div>{productMap}</div>
      <button onClick={handleDelete}>Delete product</button>
    </>
  );
};

export default ProductDetails;
