jQuery(document).ready(function(){
    //Sub Menu Slide motion
    $(`.menu .mainMenu li a`).mouseover(function(){
        $(`.subMenu`).stop().slideDown(300);
        $(`.menuFill`).stop().slideDown(300);
    }).mouseout(function(){
        $(`.subMenu`).stop().slideUp(300);
        $(`.menuFill`).stop().slideUp(300);
    })

    //Image Slide motion
    setInterval(function(){
        $(`.slideList`).delay(1000);
        $(`.slideList`).animate({marginLeft: -1200});
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginLeft: -2400});
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginLeft: 0});
        $(`.slideList`).delay(1000);
    });

    //Modal Pop up
    $(`.notice li:first-child`).click(function(){
        $(`#modal`).addClass(`active`);
    });
    //Modal Close Btn
    $(`.modalUp .upBtn`).click(function(){
        $(`#modal`).removeClass(`active`);
    })
})