#calculate average spent on services
SELECT avg(sum_cost) as service_cost_average
from(
Select Booking.`booking-id`, SUM(Service.`service-cost`) as sum_cost
From Booking
	INNER JOIN used_services
		ON Booking.`booking-id` = used_services.`booking`
	INNER JOIN Service
		ON used_services.`service` = Service.`service-type`
GROUP BY Booking.`booking-id`) as service_costs;