
// gets data for the header date
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();



$(document).ready(function () {
  // create hours variable in arrray 

  var myHoursId = ["9","10","11","12","1","2","3","4","5"];
   
  

   myHoursId.forEach(function(myHours) {
     var description= $(".description");
    if (myHours < moment().format("HH")) {
      description.attr ({
          "class": "past", 
      })
  } else if (myHours === moment().format("HH")) {
      description.attr({
          "class": "present"
      })
  } else if (myHours > moment().format("HH")) {
      description.attr({
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
