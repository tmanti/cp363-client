#Advanced Queries

# get all cities and their counts from both users and employees
Select `city`, Count(`city`)
FROM(
	SELECT Address.`city` 
	FROM Customer
		JOIN Address 
			ON Customer.`address` = Address.`address-id`
	UNION ALL
	SELECT Address.`city`
	FROM Employee
		JOIN Address
			ON Employee.`address` = Address.`address-id`
) AS addr_table
Group BY `city`
ORDER BY Count(`city`) DESC;

#query for all bookings that have used more than 1 service
select Booking.`room-booked`, Customer.`first-name`, Customer.`last-name`
FROM Booking
	INNER JOIN booked
		ON Booking.`booking-id` = booked.`booking`
	INNER JOIN Customer
		ON booked.`customer` = Customer.`customer-id`
WHERE EXISTS (SELECT Count(booking) FROM used_services WHERE used_services.`booking` = Booking.`booking-id` HAVING Count(booking) > 1 );

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

# calculate average spent 
Select avg(payment_totals)
FROM(
SELECT `booking-charged`, Sum(`payment-amount`) as payment_totals
From `Transaction`
Group By `booking-charged`
ORDER BY Sum(`payment-amount`) DESC
) as booking_transactions;


# Booking used services sum query
Select Booking.`booking-id`, SUM(Service.`service-cost`)
From Booking
	INNER JOIN used_services
		ON Booking.`booking-id` = used_services.`booking`
	INNER JOIN Service
		ON used_services.`service` = Service.`service-type`
GROUP BY Booking.`booking-id`;

# Booking used services count query
Select Distinct Booking.`booking-id`, Count(used_services.`booking`)
From Booking
	LEFT JOIN used_services
		ON Booking.`booking-id` = used_services.`booking`
GROUP BY Booking.`booking-id`
Order BY Count(used_services.`booking`) ASC;

# transaction query
SELECT `booking-charged`, Sum(`payment-amount`)	
From `Transaction`
Group By `booking-charged`
ORDER BY Sum(`payment-amount`) DESC;


