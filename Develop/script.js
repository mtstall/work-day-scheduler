// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveButton = document.querySelector('.saveBtn');

  saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var task = document.querySelector('.description').value;
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time,task);

    renderTasks();
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs(currentDay).format('HH');

  //var allHours = document.querySelectorAll('.time-block');
  //console.log(allHours);

  $('.time-block').each(function() {
    var schedulerHour = parseInt($(this).attr('id').split('hour-')[1]);

    if (currentHour > schedulerHour) {
  $(this).attr('class','row time-block past');
}

else if (currentHour < schedulerHour) {
  $(this).attr('class','row time-block future');
}

else if (currentHour == schedulerHour) {
  $(this).attr('class','row time-block present');
}
  })


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function renderTasks () {
    //var testOutput = $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    var testOutput = localStorage.getItem("hour-9");
    console.log(testOutput);

    var hourNine = $('#hour-9 .description');
    console.log(hourNine);
    hourNine.val(testOutput);
  }

  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd MMM D, YYYY'));
});
