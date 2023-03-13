//current time
var today = moment();
$("#currentDay").text(today.format("[Today is] MMMM Do, YYYY"));
var btn = $(".saveBtn");

$(document).ready(function () {

    //function to determine whether each time block is past, future, or present
    function pastOrPresent() {
        var currentClockHour = today.format("HH");
        console.log(currentClockHour);
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id'));
            console.log(blockHour);
            //adds classes to color code text block based on hour of day
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

    btn.on('click', function() {
        
        var storedTime = $(this).parent().attr('id');
        var taskInput = $(this).siblings('.description').val();
        //sending data to local storage
        localStorage.setItem(storedTime, taskInput)

        alert("Saved to local storage!");
    })

    function loadSavedData() {
        $.each(localStorage, function(key, value){
            
          
          });
    }

    loadSavedData();



})