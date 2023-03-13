var today = moment();
$("#currentDay").text(today.format("[Today is] MMM Do, YYYY"));

$(document).ready(function () {

    function pastOrPresent() {
        var currentClockHour = today.format("HH");
        console.log(currentClockHour);
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id'));
            console.log(blockHour);
            if (blockHour > currentClockHour) {
                $(this).addClass('future');
            } else if (blockHour == currentClockHour) {
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('present');
                $(this).removeClass('future');
                $(this).addClass('past');
            }
        });
    }

    pastOrPresent();

    





})