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
            var blockTime = parseInt($(this).attr('id').split('-')[0]);
            console.log(blockTime);
            //adds classes to color code text block based on hour of day
            if (blockTime > currentClockHour) {
                $(this).addClass('future');
            } else if (blockTime == currentClockHour) {
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

    //click event that stores user input in local storage
    btn.on('click', function () {

        var storedTime = $(this).parent().attr('id');
        var taskInput = $(this).siblings('.description').val();
        //sending data to local storage
        localStorage.setItem(storedTime, taskInput)

        alert("Saved to local storage!");
    })

    function viewSavedData() {
        Object.keys(localStorage).forEach((key) => {
            console.log(localStorage.getItem(key));
            
        })
    }
    
    viewSavedData();

    //send local storage value to corresponding textarea
    $('#09-hr .description').val(localStorage.getItem('09-hr'));
    $('#10-hr .description').val(localStorage.getItem('10-hr'));
    $('#11-hr .description').val(localStorage.getItem('11-hr'));
    $('#12-hr .description').val(localStorage.getItem('12-hr'));
    $('#13-hr .description').val(localStorage.getItem('13-hr'));
    $('#14-hr .description').val(localStorage.getItem('14-hr'));
    $('#15-hr .description').val(localStorage.getItem('15-hr'));
    $('#16-hr .description').val(localStorage.getItem('16-hr'));
    $('#17-hr .description').val(localStorage.getItem('17-hr'));
    
})