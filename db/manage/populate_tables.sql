USE HotelManagement;
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('1', '200', 'King');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('2', '200', 'King');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('3', '200', 'King');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('4', '200', 'King');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('5', '200', 'King');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('6', '200', 'Queen');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('7', '200', 'Queen');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('8', '200', 'Queen');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('9', '200', 'Queen');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('10', '200', 'Queen');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('11', '200', 'Twin');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('12', '200', 'Twin');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('13', '200', 'Twin');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('14', '200', 'Twin');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('15', '200', 'Twin');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('16', '200', 'Double');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('17', '200', 'Double');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('18', '200', 'Double');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('19', '200', 'Double');
/
INSERT INTO Room (`room-number`, `room-price`, `bed-type`)
        VALUES('20', '200', 'Double');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('727 Houseaddress Ave', 'Maple', 'Canada', 'Ontario', 'WYSI727');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('69 EpicHouse Bl', 'Waterloo', 'Canada', 'Ontario', 'WYDSI7');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('1 Coolhouse Cres', 'Waterloo', 'Canada', 'Ontario', 'AGE23');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('5 Niceplace Ave', 'Waterloo', 'Canada', 'Ontario', 'ASBDB2');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('420 Highhouse', 'Waterloo', 'Canada', 'Ontario', 'HIGH39');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('76 Asanna Way', 'Toronto', 'Canada', 'Ontario', 'ASNAW23');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('928 WYDSIHOUSE', 'Waterloo', 'Canada', 'Ontario', 'WYSI27');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('69 Columbia St', 'Toronto', 'Canada', 'Ontario', 'ANKJ72');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('38 HouseName', 'Waterloo', 'Canada', 'Ontario', 'JKNR82');
/
INSERT INTO Address (`street-address`, `city`, `country`, `province`, `zip_code`)
        VALUES('39 Sankyuu', 'Maple', 'Canada', 'Ontario', 'SANK39');
/
INSERT INTO Customer (`first-name`, `last-name`, `phone-number`, `email`, `address`)
    VALUES('Jemmy', 'Ahn', '4167276969', 'jemmy.an@outlook.com','1' );
/
INSERT INTO Customer (`first-name`, `last-name`, `phone-number`, `email`, `address`)
    VALUES('Cisntantinos', 'Boyii', '6287277277', 'constant.boyyyy@outlook.com','2' );
/
INSERT INTO Customer (`first-name`, `last-name`, `phone-number`, `email`, `address`)
    VALUES('Toomas', 'Ingy', '7274157272', 'tooooomas@outlook.com','3');
/
INSERT Employee (`name`, `works-in`, `address`)
        VALUES('Billy', NULL, '4');
/
INSERT Employee (`name`, `works-in`, `address`)
        VALUES('Bob', NULL, '5');
/
INSERT Employee (`name`, `works-in`, `address`)
        VALUES('Jonny', NULL, '6');
/
INSERT Department (`department-name`, `manager`)
        VALUES('Kitchen', '1');
/
#Update employee after running department
UPDATE Employee
SET `works-in` = '1'
WHERE `employee-id` = 1;
/
UPDATE Employee
SET `works-in` = '1'
WHERE `employee-id` = 2;
/
UPDATE Employee
SET `works-in` = '1'
WHERE `employee-id` = 3;
/
INSERT Shift (`shift-time`,`department`)
        VALUES('6AM','1');
/
INSERT Shift (`shift-time`,`department`)
        VALUES('12AM','1');
/
INSERT Shift (`shift-time`,`department`)
        VALUES('9PM','1');
/
INSERT Booking (`check-in`, `check-out`, `room-booked`)
        VALUES('2023-05-26', '2023-05-30', '1');
/
INSERT Booking (`check-in`, `check-out`, `room-booked`)
        VALUES('2023-06-12', '2023-06-16', '2');
/
INSERT Booking (`check-in`, `check-out`, `room-booked`)
        VALUES('2023-04-20', '2023-04-22', '3');
/
#Update room to include booking
UPDATE Room
SET `current-booking` =  '1'
WHERE `room-number` = '1';
/
INSERT booked (`customer`, `booking`)
        VALUES('1', '1');
/
INSERT booked (`customer`, `booking`)
        VALUES('2', '2');
/
INSERT booked (`customer`, `booking`)
        VALUES('3', '3');
/
#Update employee to have shifts
UPDATE Employee
SET `on-shift` =  '1'
WHERE `employee-id` = '1';
/
UPDATE Employee
SET `on-shift` =  '1'
WHERE `employee-id` = '2';
/
UPDATE Employee
SET `on-shift` =  '1'
WHERE `employee-id` = '3';
/
INSERT INTO RoomCard (`unlocks`,`owned-by`)
    VALUES('1','1');
/
INSERT INTO RoomCard (`unlocks`,`owned-by`)
    VALUES('2','2');
/
INSERT INTO RoomCard (`unlocks`,`owned-by`)
    VALUES('3','3');
/
INSERT INTO Service (`service-cost`, `service-type`)
    VALUES('50', 'massage');
/
INSERT INTO Service (`service-cost`, `service-type`)
    VALUES('30', 'dinner');
/
INSERT INTO Service (`service-cost`, `service-type`)
    VALUES('20', 'breakfast');
/
INSERT INTO Service (`service-cost`, `service-type`)
    VALUES('30', 'lunch');
/
INSERT INTO Service (`service-cost`, `service-type`)
    VALUES('100', 'ben');
/
INSERT INTO Transaction (`payment-time`, `payment-method`,`payment-amount`,`booking-charged`)
    VALUES('2022-07-27 10:34:09', 'cash','300','1');
/
INSERT INTO Transaction (`payment-time`, `payment-method`,`payment-amount`,`booking-charged`)
    VALUES('2022-07-27 07:27:27', 'visa','727','2');
/
INSERT INTO Transaction (`payment-time`, `payment-method`,`payment-amount`,`booking-charged`)
    VALUES('2022-07-27 10:34:09', 'cash','320','3');
/
INSERT used_services (`booking`, `service`)
        VALUES('1', 'massage');
/
INSERT used_services (`booking`, `service`)
    VALUES('2', 'breakfast');
/
INSERT used_services (`booking`, `service`)
        VALUES('2', 'lunch');