#query for all bookings that have used more than 1 service
select Booking.`room-booked`, Customer.`first-name`, Customer.`last-name`
FROM Booking
	INNER JOIN booked
		ON Booking.`booking-id` = booked.`booking`
	INNER JOIN Customer
		ON booked.`customer` = Customer.`customer-id`
WHERE EXISTS (SELECT Count(booking) FROM used_services WHERE used_services.`booking` = Booking.`booking-id` HAVING Count(booking) > 1 );