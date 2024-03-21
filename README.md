# API Documentation

## Products Endpoints

### Get All Products
- URL: `/products/get-all-products`
- Method: `GET`
- Description: Retrieves all products.
- Response:
  - Status Code: `200 OK`
  - Body: Array of product objects.

### Get Product by ID
- URL: `/products/get-product-by-id/:productId`
- Method: `GET`
- Description: Retrieves a product by its ID.
- Parameters:
  - `productId`: ID of the product.
- Response:
  - Status Code: `200 OK`
  - Body: Product object.

### Create Product
- URL: `/products/create-product`
- Method: `POST`
- Description: Creates a new product.
- Body:
  - `productName`: Name of the product.
- Response:
  - Status Code: `201 Created`
  - Body: Created product object.

### Update Product by ID
- URL: `/products/update-product-by-id`
- Method: `PATCH`
- Description: Updates a product by its ID.
- Body:
  - `productId`: ID of the product.
  - `productName`: New name of the product.
- Response:
  - Status Code: `200 OK`
  - Body: Updated product object.

### Update Product by Name
- URL: `/products/update-product-by-name`
- Method: `PATCH`
- Description: Updates a product by its name.
- Body:
  - `productName`: Current name of the product.
  - `newProductName`: New name of the product.
- Response:
  - Status Code: `200 OK`
  - Body: Updated product object.

### Delete Product by ID
- URL: `/products/delete-product-by-id/:productId`
- Method: `DELETE`
- Description: Deletes a product by its ID.
- Parameters:
  - `productId`: ID of the product.
- Response:
  - Status Code: `200 OK`
  - Body: Success message.

### Delete Product by Name
- URL: `/products/delete-product-by-name/`
- Method: `DELETE`
- Description: Deletes a product by its name.
- Query Parameters:
  - `productName`: Name of the product.
- Response:
  - Status Code: `200 OK`
  - Body: Success message.

## Orders Endpoints

### Get All Orders
- URL: `/orders/get-all-orders`
- Method: `GET`
- Description: Retrieves all orders.
- Response:
  - Status Code: `200 OK`
  - Body: Array of order objects.

### Get Order by ID
- URL: `/orders/get-order-by-id/:orderId`
- Method: `GET`
- Description: Retrieves an order by its ID.
- Parameters:
  - `orderId`: ID of the order.
- Response:
  - Status Code: `200 OK`
  - Body: Order object.

### Place Order
- URL: `/orders/place-order`
- Method: `POST`
- Description: Places a new order.
- Body:
  - `productName`: Name of the product.
  - `quantity`: Quantity of the product.
- Response:
  - Status Code: `201 Created`
  - Body: Created order object.
