jQuery(document).ready(function(){
    
    $(`.mainMenu li`).mouseover(function(){
        $(`.subMenu`).stop().slideDown(300);
        $(`#menuBg`).stop().slideDown(300);
    }).mouseout(function(){
        $(`.subMenu`).stop().slideUp(300);
        $(`#menuBg`).stop().slideUp(300);
    });
})