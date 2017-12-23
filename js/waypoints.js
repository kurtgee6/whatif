
// NAVIGATION BUTTON 
$(".button-collapse").sideNav();

// SCROLLSPY FROM MATERIALIZE
$(document).ready(function(){
    $('.scrollspy').scrollSpy();    
    
    var $profileImage = $('.profile-image');
    var $word = $('.word');
                
    // PROFILE IMAGE ANIMATION
    $profileImage.waypoint(function (direction){
        if(direction == 'down') {
            $profileImage.addClass('js-profile-image-animate');
        } else {
            $profileImage.removeClass('js-profile-image-animate');        
        }
    },
    {offset: '10px'});
    
    // WORD ANIMATION
    $word.waypoint(function (direction){
            $word.addClass('js-word-animate');
    }, {offset: '370px'});

    // NAV PROFILE ANIMATION
    $(window).scroll(function(){
        if($(window).scrollTop()>168){
            $("#navProfile").fadeIn();
        }
        else{
            $("#navProfile").fadeOut();
        }
    });
});