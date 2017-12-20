
 $(document).ready(function(){
    $('.scrollspy').scrollSpy();

    var $profileImage = $('.profile-image');
    var $word = $('.word');
    
    $profileImage.waypoint(function (direction){
        if(direction == 'down') {
            $profileImage.addClass('js-profile-image-animate');
        } else {
            $profileImage.removeClass('js-profile-image-animate');        
        }
    }, {offset: '60px'})
    
    $word.waypoint(function (direction){
            $word.addClass('js-word-animate');
    }, {offset: '570px'})

    $(window).scroll(function(){
        if($(window).scrollTop()>168){
           $("#navProfile").fadeIn();
        }else{
           $("#navProfile").fadeOut();
        }
  
  });

  });