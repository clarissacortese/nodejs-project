# nodejs-project


## About

For the Node.js project of [start2impact](https://www.start2impact.it)'s 'Full Stack Development' Master's course, I have developed custom RESTful APIs for an imaginary web product shop, 'Planty of Food' (POF). <br>

You can manage, create, edit and delete users, products and orders as if you were an administrator.


## How to use it

- **Download this repository**
- **Open the project folder in [Visual Studio Code](https://code.visualstudio.com)**
- **Create an .env file with your link to a [MongoDB Atlas](https://www.mongodb.com/atlas/database) database, as shown in .env.example**
- **Open the terminal in Visual Studio Code and type `npm i`**
- **Download and install [Postman Desktop Agent](https://www.postman.com)**
  <br>

- **How to create a User:**

Do a **POST** request to localhost:3000/users

```
{
    "name": "First name",
    "lastName": "Last name",
    "email": "email@example.com"
}
```

- **How to create a Product:**

Do a **POST** request to localhost:3000/products

```
{
    "productName": "Product name",
    "brand": "Brand name",
    "price": "Product price"
}
```

- **How to create an Order:**

Do a **POST** request to localhost:3000/orders

```
{
    "productId": ["Existing product id", "Existing product id"...],
    "userId": ["Existing user id", "Existing user id"...]
}
```

- **How to view users, products and orders:**<br>
  Do a **GET** request to localhost:3000/users or localhost:3000/products or localhost:3000/orders<br>
  If you want to view a specific user, product or order, do a **GET** request to localhost:3000/users/id or localhost:3000/products/id or localhost:3000/orders/id<br>

- **How to update users, products and orders:** <br>
  Do a **PATCH** request to localhost:3000/users/id or localhost:3000/products/id or localhost:3000/orders/id<br>
 
- **How to delete users, products and orders:** <br>
  Do a **DELETE** request to localhost:3000/users/id or localhost:3000/products/id or localhost:3000/orders/id<br>


## Resources

- **Node.js**
- **MongoDB**
- **Express**
- **Mongoose**
- **Postman**


## Contacts

[Email me](mailto:clarissacortese.info@gmail.com) <br>
[Portfolio](https://clarissacortese.com/) <br>
[LinkedIn](https://linkedin.com/in/clarissacortese/) <br>
[GitHub Profile](https://github.com/clarissacortese/) <br>
[GitHub Repository](https://github.com/clarissacortese/nodejs-project)
