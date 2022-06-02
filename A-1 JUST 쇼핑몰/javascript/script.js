jQuery(document).ready(function(){

    $(`.menu .mainMenu li a`).mouseover(function(){
        $(`.subMenu`).stop().slideDown(300);
    }).mouseout(function(){
        $(`.subMenu`).stop().slideUp(300);
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

    $(function(){
        $(`.tabMenu li a`).click(function(){
            $(this).parent().addClass(`active`).siblings().removeClass(`active`);
            return false;
        });
    });

    $(`.notice ul li:first-child a`).click(function(){
        $(`#layer`).addClass(`active`)
    });

    $(`.upBtn`).click(function(){
        $(`#layer`).removeClass(`active`)
    });



});