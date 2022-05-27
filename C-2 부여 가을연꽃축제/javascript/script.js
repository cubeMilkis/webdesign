jQuery(document).ready(function(){
    $(`.mainMenu li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(300);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(300);
    })

    $(`.imgSlide a:gt(0)`).hide();
    setInterval(function(){
        $(`.imgSlide a:first-child`)
        .fadeOut(1000)
        .next(`a`)
        .fadeIn(1000)
        .end()
        .appendTo(`.imgSlide`)  
    },3000)
});