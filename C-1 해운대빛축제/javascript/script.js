jQuery(document).ready(function(){
    $(`.menu .mainMenu li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(400);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(400);
    });

    $(`.imgSlide a:gt(0)`).hide();
    setInterval(function(){
        $(`.imgSlide a:first`)
        .fadeOut(1000)
        .next(`a`)
        .fadeIn(1000)
        .end()
        .appendTo(`.imgSlide`)
    },3000);



});