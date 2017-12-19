
 $(document).ready(function(){
    $('.scrollspy').scrollSpy();

    var $para = $('.para');
    var $word = $('.word');
    
    $para.waypoint(function (direction){
        if(direction == 'down') {
            $para.addClass('js-para-animate');
        } else {
            $para.removeClass('js-para-animate');        
        }
    }, {offset: '60px'})
    
    $word.waypoint(function (direction){
            $word.addClass('js-word-animate');
    }, {offset: '250px'})

    $(window).scroll(function(){
        if($(window).scrollTop()>190){
           $("#navProfile").fadeIn();
        }else{
           $("#navProfile").fadeOut();
        }
  
  });

  });