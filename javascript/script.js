jQuery(document).ready(function(){
    
    $(`.mainMenu li`).mouseover(function(){
        $(`.subMenu`).stop().slideDown(300);
        $(`#menuBg`).stop().slideDown(300);
    }).mouseout(function(){
        $(`.subMenu`).stop().slideUp(300);
        $(`#menuBg`).stop().slideUp(300);
    });

    $(`.imgSlide a:gt(0)`).hide();
    setInterval(function(){
        $(`.imgSlide a:first`)
        .fadeOut(1000)
        .next(`a`)
        .fadeIn(1000)
        .end()
        .appendTo(`.imgSlide`);

    },3000);

    $(`.notice li:first-child`).click(function(){
        $(`#modal`).addClass(`active`)
    });

    $(`.modalWrap .upBtn`).click(function(){
        $(`#modal`).removeClass(`active`)
    });
})