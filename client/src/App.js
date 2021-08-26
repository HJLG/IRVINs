import Homepage from "./components/Homepage";
import { Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import CreateProduct from "./components/CreateProduct";
function App() {
  return (
    <div>
      <h1>IRVIN's PRODUCTS</h1>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/create">
          <CreateProduct />
        </Route>
        <Route path="/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
