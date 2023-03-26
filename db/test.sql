create database IF NOT EXISTS HotelManagement;
/
CREATE TABLE `HotelManagement`.`Department` (
  `department-id` INT NOT NULL AUTO_INCREMENT,
  `department-name` VARCHAR(45) NOT NULL,
  `manager` INT,
  PRIMARY KEY (`department-id`));
/
CREATE TABLE `HotelManagement`.`Shift` (
  `shift-id` INT NOT NULL AUTO_INCREMENT,
  `shift-time` VARCHAR(45) NOT NULL,
  `department` INT NOT NULL,
  constraint `in-department` 
	foreign key(`department`) 
	references `HotelManagement`.`Department`(`department-id`),
  PRIMARY KEY (`shift-id`));    