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