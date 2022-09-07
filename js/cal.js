//Disable days

function disableHoliday(date) {
    var string = $.datepicker.formatDate('yy-mm-dd', date);
          
    var filterDate = new Date(string);
    var day = filterDate.getDay();
    var isHoliday = ($.inArray(string, holiDays) != -1);
    return [day != weekly_offdays[0] && day != weekly_offdays[1] && day != weekly_offdays[2] && day !=weekly_offdays[3] && day !=weekly_offdays[4] && day !=weekly_offdays[5]  && day !=weekly_offdays[6] && !isHoliday]
 }