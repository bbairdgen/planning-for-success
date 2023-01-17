// Global variables
var timeDisplayEl = $('#currentDay')
var descriptionEl = $('.description')
var saveButton = $('.saveBtn')


$(function () {
  // This saves the items into local storage
  saveButton.on('click', function () {
    // These two variables indicate that the items typed into the textarea element will be
    // saved into local storage. Text area is the sibling of the save button and the distinct id
    // used is the parent element.
    var storedEvents = $(this).siblings('textarea').val();
    var time = $(this).parent().attr('id');

    // calls the two variables and sets them into local storage.
    localStorage.setItem(time, storedEvents)
  })

// This function sets the class and compares it to the current time.
  $('textarea').each(function () {
    // add variables comparing now(dayjs) to parseInt() if-else statements 
    var now = dayjs()
    var current = parseInt($(this).attr('id'));
// compares current time to the time in the planner.
    if (current > now) {
      $(this).addClass('future')
    } else if (current < now) {
      $(this).addClass('past')
    } else {
      $(this).addClass('present')
    }
  })

  // Loop that gets all of the items saved into storage
  $('textarea').each(function () {
    var retrieve = $(this).parent().attr('id');

    $(this).val(localStorage.getItem(retrieve));
  })

// This function displays the current date in the header
  function displayDate() {
    var today = dayjs().format('dddd, DD MMMM YYYY')
    timeDisplayEl.text(today)
  }

  // This calls the function to make the date run.
  displayDate()

});
