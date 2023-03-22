 create database HotelManagement IF NOT EXISTS;

use HotelManagement;

create table HotelManagement.Address (
	`address-id` INT NOT NULL AUTO_INCREMENT,
    `street-address` VARCHAR(100) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
	`province` VARCHAR(45) NOT NULL,
    `zip_code` VARCHAR(10) NOT NULL,
    
    PRIMARY KEY(`address-id`)
);

create table HotelManagement.Room (
	`room-number` INT NOT NULL,
    `room-price` INT NOT NULL,
    `bed-type` VARCHAR(45) NULL,
    `current-booking` INT,
	
    PRIMARY KEY(`room-number`)
);

create table HotelManagement.Customer (
	`customer-id` INT NOT NULL AUTO_INCREMENT,
    `first-name` VARCHAR(25) NOT NULL,
    `last-name` VARCHAR(25) NOT NULL,
    `phone-number` VARCHAR(12) NOT NULL,
    `email` VARCHAR(100),
    `address` INT NOT NULL,
    
    PRIMARY KEY(`customer-id`),
    constraint `address` foreign key (`address`) REFERENCES `HotelManagement`.`Address` (`address-id`)
);

create table HotelManagement.Booking (
	`booking-id` INT NOT NULL AUTO_INCREMENT,
    `check-in` DATE NOT NULL,
    `check-out` DATE NOT NULL,
    `room-booked` INT NOT NULL,
    
    PRIMARY KEY(`booking-id`),
    constraint `uses` foreign key (`room-booked`) references `HotelManagement`.`Room` (`room-number`)
);

ALTER TABLE HotelManagement.Room
add CONSTRAINT `room-booking-ref`
	FOREIGN KEY (`current-booking`)
    REFERENCES `HotelManagement`.`Booking` (`booking-id`);

create table HotelManagement.RoomCard (
	`card-id` INT NOT NULL AUTO_INCREMENT,
    `unlocks` INT NOT NULL,
    `owned-by` INT NOT NULL,
    
    PRIMARY KEY(`card-id`),
	constraint `unlocks` foreign key (`unlocks`) REFERENCES `HotelManagement`.`Room` (`room-number`),
	constraint `owned-by` foreign key (`owned-by`) REFERENCES `HotelManagement`.`Customer` (`customer-id`)
);

create table HotelManagement.booked (
	`customer` INT NOT NULL,
    `booking` INT NOT NULL,
    
    PRIMARY KEY(`customer`, `booking`),
	constraint `customer` foreign key (`customer`) REFERENCES `HotelManagement`.`Customer` (`customer-id`),
    constraint `booking` foreign key(`booking`) REFERENCES `HotelManagement`.`Booking`(`booking-id`)
);

create table HotelManagement.Service(
	`service-cost` INT NOT NULL,
    `service-type` VARCHAR(100) NOT NULL,
    
    PRIMARY KEY(`service-type`)
);

create table HotelManagement.used_services(
	`booking` INT NOT NULL,
    `service` VARCHAR(100) NOT NULL,
    
    PRIMARY KEY(`booking`, `service`),
    constraint `booking-used` foreign key (`booking`) references `HotelManagement`.`Booking`(`booking-id`),
	constraint `service` foreign key (`service`) references `HotelManagement`.`Service`(`service-type`)
);

create table HotelManagement.`Transaction` (
	`transaction-id` INT NOT NULL AUTO_INCREMENT,
    `payment-time` DATETIME(6) NOT NULL,
    `payment-method` VARCHAR(100) NOT NULL,
    `payment-amount` INT NOT NULL,
    `booking-charged` INT NOT NULL,
    
    PRIMARY KEY(`transaction-id`),
    constraint `paid` foreign key(`booking-charged`) references `HotelManagement`.`Booking`(`booking-id`)
);

CREATE TABLE `HotelManagement`.`Department` (
  `department-id` INT NOT NULL AUTO_INCREMENT,
  `department-name` VARCHAR(45) NOT NULL,
  `manager` INT,
  PRIMARY KEY (`department-id`));
    
CREATE TABLE `HotelManagement`.`Shift` (
  `shift-id` INT NOT NULL AUTO_INCREMENT,
  `shift-time` VARCHAR(45) NOT NULL,
  `department` INT NOT NULL,
  constraint `in-department` 
	foreign key(`department`) 
	references `HotelManagement`.`Department`(`department-id`),
  PRIMARY KEY (`shift-id`));    

CREATE TABLE `HotelManagement`.`Employee` (
  `employee-id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `works-in` INT,
  `on-shift` INT,
  `address` INT NOT NULL,
  PRIMARY KEY (`employee-id`),
  CONSTRAINT `apart-of`
    FOREIGN KEY (`works-in`)
    REFERENCES `HotelManagement`.`Department` (`department-id`),
  constraint `on-shift`
	foreign key(`on-shift`)
    references `HotelManagement`.`Shift`(`shift-id`),
  constraint `emp-address` 
	foreign key (`address`) 
    REFERENCES `HotelManagement`.`Address` (`address-id`));
    
ALTER TABLE HotelManagement.Department
add CONSTRAINT `manages`
	FOREIGN KEY (`manager`)
    REFERENCES `HotelManagement`.`Employee` (`employee-id`);
 