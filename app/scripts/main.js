$(document).ready(function() {
  $('.browse').on('mouseover', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.cats').css('display', 'inline-block');
  });

});
