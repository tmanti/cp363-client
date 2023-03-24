create database IF NOT EXISTS HotelManagement;
/
create table `HotelManagement`.`Address` (
    `address-id` INT NOT NULL AUTO_INCREMENT,
    `street-address` VARCHAR(100) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `province` VARCHAR(45) NOT NULL,
    `zip_code` VARCHAR(10) NOT NULL,
    
    PRIMARY KEY(`address-id`)
);