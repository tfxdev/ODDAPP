
This code block will determine if today is saturday, sunday & monday, if it is then it will check the next
day. if that is as well then it will check the next day.

Now we have to make it to check holidays as well

Logic is this: If today is not saturday, sunday or monday and not holiday then (SET) but if not we check tomorrow
 if tomorrow is not saturday, sunday or monday and not holiday then (SET) else
 we check the next day after tomorrow, 
if next_day_after_tomorrow is not saturday, sunday or monday and not holiday then (SET)


This is how it works: First we get today; then we get the valid date, and calculate the distance 
Between two days. After that we will just pass the "+iD" as string where i is the distance between the
days. That is okay because we will get the distance after doing two validations one is the weekday and
another one is the holiday that is as well statically types. 

Definations:

datexx: The instance of Date function. Used all over the file.
today: Used for ix incriment
hhx: Hour instance used once to check if the default time can be today. Checks if it is less than 11 hours.
yyyyx: Year instance used in the condition and loop to build date pattern
mmx: Same as year
tomor: Used multiple places to incriment the date 
timex: multiply s using ix
ix: the incriment operator
ddx: date builder
tdtp: Output of the date
day_to_increase: Final value.