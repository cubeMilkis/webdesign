jQuery(document).ready(function(){
    $(`.mainMenu > li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(300);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(300);
    });

    $(`.slideImage > a:gt(0)`).hide();
    setInterval(function(){
        $(`.slideImage a:first`)
        .fadeOut(1000)
        .next(`a`)
        .fadeIn(1000)
        .end()
        .appendTo(`.slideImage`);
    },3000);

    $(`.notice ul li:first`).click(function(){
        $(`#modal`).addClass(`active`);
    });

    $(`.modalUp .upBtn`).click(function(){
        $(`#modal`).removeClass(`active`);
    });


})