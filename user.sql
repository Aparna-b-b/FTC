create database farmer_db;
USE farmer_db;
CREATE TABLE crops (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    farmer_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(255) NOT NULL,
    crop_type VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    location VARCHAR(100) NOT NULL,
    acre INT NOT NULL,
    typeofland VARCHAR(100) NOT NULL,
    image VARCHAR(255) NOT NULL
);
USE farmer_db;
select * from crops;