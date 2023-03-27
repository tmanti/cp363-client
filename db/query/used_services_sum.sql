# Booking used services sum query
Select Booking.`booking-id`, SUM(Service.`service-cost`)
From Booking
	INNER JOIN used_services
		ON Booking.`booking-id` = used_services.`booking`
	INNER JOIN Service
		ON used_services.`service` = Service.`service-type`
GROUP BY Booking.`booking-id`;