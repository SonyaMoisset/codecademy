var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();
    
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $('.comments').prepend(html);
      $('#comment').val("");
    }

    return false;
  });
};

$(document).ready(main);