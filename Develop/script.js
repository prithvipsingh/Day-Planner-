// create variable for all text enter in textarea
var allText = {};

// gets data for the header date
function getHeaderDate() {
  var currentHeaderDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentHeaderDate);
}

// create function for save text in local storage
function saveReminders() {
  localStorage.setItem("allText", JSON.stringify(allText));
}

// function for get data from local storage afte refresh page
function fetchReminders() {
  let localStorageText = localStorage.getItem("allText");

  if (localStorageText) {
    allText = JSON.parse(localStorageText);
  }
}

function displayReminders() {
  var hoursArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  hoursArray.forEach((id) => {
    $(`#${id}`).val(allText[id]);
  });
}

// sets any existing localStorage data to the view if it exists
function init() {
  var storedDay = JSON.parse(localStorage.getItem("hoursArray"));
  if (storedDay) {
    hoursArray = storedDay;
  }
  fetchReminders();
  displayReminders();
}

getHeaderDate();

$(document).ready(function () {
  // create hours variable in arrray
  init();
  var currentHour = moment().format("HH");
  var hoursArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  // create for each function
  hoursArray.forEach(function(hour) {
    var description = $("#"+hour);

    intHour = parseInt(hour);
    if (intHour < currentHour) {
      description.addClass("past");
    } else if (intHour == currentHour) {
      description.addClass("present");
    } else if (intHour > currentHour) {
      description.addClass("future");
    }
    // creates save button
    var task = $("textarea");

    var saveButton = $("<i class='far fa-save fa-lg'></i>");
    var savePlan = $("<button>").attr("class", "col-md-1 saveBtn");
  });

  //saves data to be used in localStorage
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var textarea = $(this)
      .parent()
      .parent()
      .children(".col-10")
      .children(".description")
      .children("textarea");
    var saveIndex = textarea.attr("id");
    var text = textarea.val();
    allText[saveIndex] = text;
    saveReminders();
  });
});
