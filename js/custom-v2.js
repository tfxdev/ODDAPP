// Fully working copy last modified on 06/09/2022, 10:30 PM

let hhx = 9;//today.getHours();


//Date string generator

var today = new Date();
today = today.getDay()
today = 6
// console.log('Today day is: '+today)

var datexx = new Date();
var yyyyx = datexx.getFullYear();
var mmx = String(datexx.getMonth() + 1).padStart(2, '0'); //January is 0!

let tomor;
let timex;
let ix;
for ( ix = today-2; ix < 60; ) {
    //Full date generator
    var ddx = String(datexx.getDate()+ ix).padStart(2, '0');
    var tdtp = yyyyx + '-' + mmx + '-' + ddx;
    // console.log(tdtp)
    //Full date generator
    timex = ix*86400000
	tomor = new Date(+new Date() + timex);
	tomor = tomor.getDay()
	if (weekly_offdays.includes(tomor) == false && holiDays.includes(tdtp) == false) {
        // var p = tomor + ' is the day'
        // var day_to_increase = tomor - today
        // console.log('Date after increase: '+ tdtp);
        // console.log('Day to increase: '+ tomor);
        break;
  }; 
    ix++;
}
day_to_increase = tdtp
// console.log('Day to increase: '+ day_to_increase);
