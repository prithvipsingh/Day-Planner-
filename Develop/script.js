
// gets data for the header date
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();



$(document).ready(function () {
  // create hours variable in arrray 

  var myHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
   
  

   myHours.forEach(function(myHours) {

    if (myHours < moment().format("HH")) {
      planData.attr ({
          "class": "past", 
      })
  } else if (myHours === moment().format("HH")) {
      planData.attr({
          "class": "present"
      })
  } else if (myHours > moment().format("HH")) {
      planData.attr({
          "class": "future"
      })
  }

  // creates save button
  var saveButton = $("<i class='far fa-save fa-lg'></i>")
  var savePlan = $("<button>")
      .attr({
          "class": "col-md-1 saveBtn"
  });

})

   });

});
