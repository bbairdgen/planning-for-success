// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay')
var descriptionEl = $('.description')
var saveButton = $('.saveBtn')


$(function () {

  saveButton.on('click', function () {
    var storedEvents = $(this).siblings('textarea').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, storedEvents)
  })


  $('textarea').each(function () {
    // add variables comparing now(dayjs) to parseInt() if-else statements 
    var now = dayjs()
    var current = parseInt($(this).attr('id'));

    if (current > now) {
      $(this).addClass('future') 
      $(this).addClass('past')
    } else {
      $(this).addClass('present')
    }
  })

  $('textarea').each(function() {
      var retrieve = $(this).parent().attr('id');

      $(this).val(localStorage.getItem(retrieve));
    })
  

   function displayDate() {
    var today = dayjs().format('dddd, DD MMMM YYYY')
    timeDisplayEl.text(today)
  }

  displayDate()
  getItem()

});
