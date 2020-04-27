
// gets data for the header date
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();



$(document).ready(function () {
  // create hours variable in arrray 

  var myHoursId = ["9","10","11","12","13","14","15","16","17"];
   // create for each function 
   myHoursId.forEach(function(myHour) {
    var description= $(".description");
    var currentHour = moment().format("HH");
    myHour = parseInt(myHour);
    if (myHour < currentHour) {
      description.addClass("past");
    } else if (myHour === currentHour) {
      description.addClass("present");
    } else if (myHour > currentHour) {
      description.addClass("future");
    }

    // creates save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>").attr("class","col-md-1 saveBtn");
    });
})