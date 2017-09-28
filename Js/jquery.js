/*** Start ***/

$(document).ready(function() {

/* Меню навигации */
$('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
});
/* Скролл вверх */
$('body').append('<button class="btn_up" />');
$('.btn_up').click(function(){
    $('body').animate({'scrollTop':0},1000);
    $('html').animate({'scrollTop':0},1000);
});
    
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $('.btn_up').addClass('active');
    }else{
        $('.btn_up').removeClass('active');
    }
})
/* Изображения */
$('header ol a').mouseover(function(){
   $(this).addClass('svet_menu'); 
});  
$('header ol a').mouseout(function(){
   $(this).removeClass('svet_menu'); 
}); 
    
$('#lig2,#lig3,#lig4 ').css({'display':'none'});
var time = 0;  
$('.navi a[href=num2]').click(function(){
    $('.navi a[href^=num]').removeClass('active');
    $(this).addClass('active');
    
    $('#lig1,#lig3,#lig4').fadeOut(time);
    $('#lig2').fadeIn();
    return false;
});
$('.navi a[href=num3]').click(function(){
    $('.navi a[href^=num]').removeClass('active');
    $(this).addClass('active');
    
    $('#lig1,#lig2,#lig4').fadeOut(time);
    $('#lig3').fadeIn();
    return false;
});
$('.navi a[href=num4]').click(function(){
    $('.navi a[href^=num]').removeClass('active');
    $(this).addClass('active');
    
    $('#lig1,#lig3,#lig2').fadeOut(time);
    $('#lig4').fadeIn();
    return false;
}); 
$('.navi a[href=num1]').click(function(){
    $('.navi a[href^=num]').removeClass('active');
    $(this).addClass('active');
    
    $('#lig2,#lig3,#lig4').fadeOut(time);
    $('#lig1').fadeIn();
    return false;
});

/* Сервисы */   
$('img[alt=Icone1]').mouseover(function(){$(this).attr('src', 'images/servieces_icon_1_of.png');});
$('img[alt=Icone1]').mouseout(function(){$(this).attr('src', 'images/servieces_icon_1.png');});
$('img[alt=Icone2]').mouseover(function(){$(this).attr('src', 'images/servieces_icon_2_of.png');});
$('img[alt=Icone2]').mouseout(function(){$(this).attr('src', 'images/servieces_icon_2.png');});
$('img[alt=Icone3]').mouseover(function(){$(this).attr('src', 'images/servieces_icon_3_of.png');});
$('img[alt=Icone3]').mouseout(function(){$(this).attr('src', 'images/servieces_icon_3.png');});

 /* Форма */
$('.text_inp').click(function(){
   $(this).css({'border':'2px solid #0ab1e3'}); 
});

    
 
}); // Конец ready
