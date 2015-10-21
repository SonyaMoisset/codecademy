var main = function() {

  $('#top-text').keyup(function() {
    var top = $(this).val();
    $('.top-caption').text(top);
  });

  $('#bottom-text').keyup(function() {
    var bottom = $(this).val();
    $('.bottom-caption').text(bottom);
  });

  $('#image-url').keyup(function() {
    var image = $(this).val();
    $('#meme').attr('src', image);
  });

};

$(document).ready(main);