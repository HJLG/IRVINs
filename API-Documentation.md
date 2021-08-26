# Products


## <strong>POST</strong> /api/products

- Add new product

| field       | data_type | required | unique | min |
| ----------- | --------- | -------- | ------ | --- |
| createdAt   | Date      | True     | -      | -   |
| updatedAt   | Date      | True     | -      | -   |
| name        | String    | True     | -      | -   |
| price       | Number    | True     | -      | 1   |
| description | String    | False    | -      | -   |
| image       | String    | False    | -      | -   |
| tags        | Array     | False    | -      | -   |

<br>

## <strong>GET</strong> /api/products

- Get the list of all the products

## <strong>GET</strong> /api/products/{id}
- Get the specific product by id

## <strong>PUT</strong> /api/products/{id}

- Update the products based on id

## <strong>DELETE</strong> /api/products/{id}

- Delete the products based on id

  <br>
