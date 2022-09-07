var weekly_offdays = [0,3,6] // This is statickly typed by Britt and the company

//This code block will determine if today is saturday, sunday & monday, if it is then it will check the next
//day. if that is as well then it will check the next day.

//// Now we have to make it to check holidays as well

//Logic is this: If today is not saturday, sunday or monday and not holiday then (SET) but if not we check tomorrow
// if tomorrow is not saturday, sunday or monday and not holiday then (SET) else
// we check the next day after tomorrow, 
//if next_day_after_tomorrow is not saturday, sunday or monday and not holiday then (SET)


//This is how it works: First we get today; then we get the valid date, and calculate the distance 
//Between two days. After that we will just pass the "+iD" as string where i is the distance between the
//days. That is okay because we will get the distance after doing two validations one is the weekday and
//another one is the holiday that is as well statically types. 

var today = new Date();
today = today.getDay()
console.log(today)

let tomor;
let timex;
let ix;
for ( ix = today-1; ix < 60; ) {
    timex = ix*86400000
	tomor = new Date(+new Date() + timex);
	tomor = tomor.getDay()
	if (weekly_offdays.includes(tomor) == false) {
        var p = tomor + ' is the day'
        var day_to_increase = tomor - today
        console.log(day_to_increase);
        break;
  }; 
    ix++;
}
day_to_increase = '+'+day_to_increase+'D'


