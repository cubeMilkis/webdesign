jQuery(document).ready(function(){
    
    $(`.mainMenu > li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(500);
    });



    setInterval(function(){
        $(`.slideList`).delay(1000);
        $(`.slideList`).animate({marginTop: -300});
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginTop: -600});
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginTop: 0});
        $(`.slideList`).delay(1000);
    });

    $(`.notice li:first-child`).click(function(){
        $(`#layer`).addClass(`active`);
    });
    $(`.closeBtn`).click(function(){
        $(`#layer`).removeClass(`active`);
    });
});