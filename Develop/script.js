$(function () {
  $(".saveBtn").on("click", function (event) {
    //targeting html
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save div id and user input in local storage
    localStorage.setItem(time, task);
  });

  //current hour in military time
  var currentHour = dayjs(currentDay).format("HH");

  //loop over each time-block div to parse out the hour
  $(".time-block").each(function () {
    var schedulerHour = parseInt($(this).attr("id").split("hour-")[1]);

    //different scenarios to create the class of each div
    if (currentHour > schedulerHour) {
      $(this).attr("class", "row time-block past");
    } else if (currentHour < schedulerHour) {
      $(this).attr("class", "row time-block future");
    } else if (currentHour == schedulerHour) {
      $(this).attr("class", "row time-block present");
    }
  });

  //pull user input from local storage
  function renderTasks() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  }

  //run this function to load user input on page load
  renderTasks();

  // display current date
  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd MMM D, YYYY"));
});
