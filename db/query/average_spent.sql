# calculate average spent 
Select avg(payment_totals)
FROM(
SELECT `booking-charged`, Sum(`payment-amount`) as payment_totals
From `Transaction`
Group By `booking-charged`
ORDER BY Sum(`payment-amount`) DESC
) as booking_transactions;