// Final copy
//Date string generator

var datexx = new Date();
var today = datexx.getDay();
let hhx =  datexx.getHours();
// console.log('Today is: '+today)

var yyyyx = datexx.getFullYear();
var mmx = String(datexx.getMonth() + 1).padStart(2, '0'); //January is 0!
var ddx = String(datexx.getDate()).padStart(2, '0');
var tdtp = yyyyx + '-' + mmx + '-' + ddx;
// console.log('Today the day is: '+ tdtp)
let tomor;
let timex;
let ix;
if (hhx < 11 && weekly_offdays.includes(today) == false && holiDays.includes(tdtp) == false){
    var ddx = String(datexx.getDate()).padStart(2, '0');
    var tdtp = yyyyx + '-' + mmx + '-' + ddx;
} else{
    for ( ix = today-1; ix < 60; ) {
        //Full date generator
        var ddx = String(datexx.getDate()+ ix).padStart(2, '0');
        var tdtp = yyyyx + '-' + mmx + '-' + ddx;
        console.log(tdtp)
        //Full date generator
        timex = ix*86400000
        tomor = new Date(+new Date() + timex);
        tomor = tomor.getDay()
        if (weekly_offdays.includes(tomor) == false && holiDays.includes(tdtp) == false) {
            console.log('Date after increase: '+ tdtp);
            console.log('Day to increase: '+ tomor);
            break;
      }; 
        ix++;
    }

}

day_to_increase = tdtp
console.log('Day to increase: '+ day_to_increase);
