jQuery(document).ready(function(){
    $(`.menu .mainMenu li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(500);
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

    

    $(`.notice li a:first`).click(function(){
        $(`#layer`).addClass(`active`)
    });
    $(`.upBtn`).click(function(){
        $(`#layer`).removeClass(`active`)
    });

})