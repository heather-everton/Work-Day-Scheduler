//use moment to display the current time
$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

//get the current houur from moment in military time.
var currentTime = moment().hours();

//Load all the appts arrays from local storage
$("#8 .col-10").val(localStorage.getItem("8"));
$("#9 .col-10").val(localStorage.getItem("9"));
$("#10 .col-10").val(localStorage.getItem("10"));
$("#11 .col-10").val(localStorage.getItem("11"));
$("#12 .col-10").val(localStorage.getItem("12"));
$("#13 .col-10").val(localStorage.getItem("13"));
$("#14 .col-10").val(localStorage.getItem("14"));
$("#15 .col-10").val(localStorage.getItem("15"));
$("#16 .col-10").val(localStorage.getItem("16"));
$("#17 .col-10").val(localStorage.getItem("17"));


//put the key value pair into local storage.
$(".save").on( "click",function(){
    var apptName = $(this).siblings(".col-10").val()
    var apptTime = $(this).parent().attr("id")

    localStorage.setItem(apptTime,apptName)
})

s$(".row").each(function(){
    var blockHour = $(this).attr("id");
    if(blockHour < currentTime){
        $(this).children(".list-group-item").addClass("past");
    }else if(blockHour > currentTime){
        $(this).children(".list-group-item").addClass("future");
    }else{
        $(this).children(".list-group-item").addClass("present");
    }
})