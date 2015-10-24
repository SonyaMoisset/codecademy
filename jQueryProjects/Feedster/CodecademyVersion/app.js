var main = function() {
  $('.notification img').click(function() {
    $('.notification ul').toggle(250);
  });
  
  $('.btn').click(function() {
    $(this).toggleClass('btn-like');
  });
}

$(document).ready(main);