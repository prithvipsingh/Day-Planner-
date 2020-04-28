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
  var myHoursId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  myHoursId.forEach((id) => {
    $(`#${id}`).val(allText[id]);
  });
}

// sets any existing localStorage data to the view if it exists
function init() {
  var storedDay = JSON.parse(localStorage.getItem("myHoursId"));
  if (storedDay) {
    myHoursId = storedDay;
  }
  fetchReminders();
  displayReminders();
}

getHeaderDate();

$(document).ready(function () {
  // create hours variable in arrray
  init();

  var myHoursId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  // create for each function
  myHoursId.forEach(function (myHour) {
    var description = $(".description");
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
