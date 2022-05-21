jQuery(document).ready(function(){

    $(`.mainMenu li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(300);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(300);
    })

    setInterval(function(){
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginLeft: -1200});
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginLeft: -2400});
        $(`.slideList`).delay(2000);
        $(`.slideList`).animate({marginLeft: 0});
        $(`.slideList`).delay(2000);
    });

    $(function(){
        $(`.tabMenu > li > a`).click(function(){
            $(this).parent().addClass(`active`)
            .siblings().removeClass(`active`)
            return false;
        })
    })
})