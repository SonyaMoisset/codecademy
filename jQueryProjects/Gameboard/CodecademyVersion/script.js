var main = function() {
	$('.more-btn').click(function() {
    $(this).next().toggle('more-menu');
  });
  
  $('.share').click(function() {
    $(this).next().toggle('.share-menu');
  });
  
  $('.notification').click(function() {
    $(this).toggleClass('active');
  });
};


$(document).ready(main);