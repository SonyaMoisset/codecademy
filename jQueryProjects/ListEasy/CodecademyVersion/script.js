var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
    $('form').submit(function() {
        var text = $('#todo').val();
        var html = template(text);
        $('.list').append(html);
        $('#todo').val('');
        
    return false;    
    });
    
    $('.list').on("click",'.glyphicon-star',function() {
        $(this).toggleClass('active');
    });
    
    $('.list').on("click",'.glyphicon-remove',function() {
        $(this).parent().remove();
    });
     
  };

$(document).ready(main);