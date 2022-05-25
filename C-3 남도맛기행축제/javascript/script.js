jQuery(document).ready(function(){
    
    $(`.menu .mainMenu li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(300);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(300);
    });

    setInterval(function(){
        $(`.slideList`).delay(1000)
        $(`.slideList`).animate({marginLeft: -800})
        $(`.slideList`).delay(2000)
        $(`.slideList`).animate({marginLeft: -1600})
        $(`.slideList`).delay(2000)
        $(`.slideList`).animate({marginLeft: 0})
        $(`.slideList`).delay(1000)
    });
})