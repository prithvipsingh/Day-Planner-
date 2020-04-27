
// gets data for the header date
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $("#currentDay").text(currentHeaderDate);
}



function saveReminders() {
  localStorage.setItem("myHoursId", JSON.stringify(myHoursId));
}

// sets any data in localStorage to the view
function displayReminders() {
  myHoursId.forEach(function (myHour) {
      $(`#${myHour}`).val;
  })
}

// sets any existing localStorage data to the view if it exists
function init() {
  var storedDay = JSON.parse(localStorage.getItem("myHoursId"));
  if (storedDay) {
    myHoursId = storedDay;
  }
  saveReminders();
  displayReminders();
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
    var task = $("textarea");

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>").attr("class","col-md-1 saveBtn");
    });
  
    //saves data to be used in localStorage
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        var saveIndex = $(this).siblings(".description").children(".future").attr("id");
        myHoursId[saveIndex] = $(this).siblings(".description").children(".future").val();
        console.log(saveIndex);
        saveReminders();
        displayReminders();
    })





})