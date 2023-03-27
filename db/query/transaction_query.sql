# transaction query
SELECT `booking-charged`, Sum(`payment-amount`)	
From `Transaction`
Group By `booking-charged`
ORDER BY Sum(`payment-amount`) DESC;