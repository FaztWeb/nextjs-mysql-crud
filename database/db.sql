CREATE DATABASE productsdb IF NOT EXISTS;

use productsdb;

CREATE TABLE product(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(400),
  price DECIMAL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe product;