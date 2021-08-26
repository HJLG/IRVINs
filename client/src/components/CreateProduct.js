import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

const CreateProduct = () => {
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.image.value);
    axios
      .post("http://localhost:3003/api/products", {
        name: event.target.name.value,
        price: event.target.price.value,
        description: event.target.description.value,
        image: event.target.image.value,
        tags: event.target.tags.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      history.push('/')
  };

  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={submitHandler} method="POST">
        <input type="text" name="name" placeholder="name of product" />
        <br />
        <input type="number" name="price" placeholder="price of product" />
        <br />
        <input type="text" name="description" placeholder="description" />
        <br />
        <input type="text" name="image" placeholder="image link of product" />
        <br />
        <input type="text" name="tags" placeholder="tags" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
