jQuery(document).ready(function(){
    
    $(`.menu .mainMenu li`).mouseover(function(){
        $(this).find(`.subMenu`).stop().slideDown(300);
    }).mouseout(function(){
        $(this).find(`.subMenu`).stop().slideUp(300);
    });


})