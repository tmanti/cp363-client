# Booking used services count query
Select Distinct Booking.`booking-id`, Count(used_services.`booking`)
From Booking
	LEFT JOIN used_services
		ON Booking.`booking-id` = used_services.`booking`
GROUP BY Booking.`booking-id`
Order BY Count(used_services.`booking`) ASC;