
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
        if(direction == 'down') {
            $word.addClass('js-word-animate');
            console.log('fsadf');
        } else {
            $word.removeClass('js-word-animate');        
        }
    }, {offset: '250px'})

  });