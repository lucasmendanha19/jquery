$(document).ready(function(){
    
    // 1A
    $(".module");
    // 1B
    $("#myList li:eq(2)");
    $("#myListItem");
    // 1C 
    $("label[for=q]");
    // 1D
    $("img[alt]").length;
    // 1E
    $("tbody tr:even");
    // 1F
    $("h2:contains('B'):contains('e')").length;
    // 1G Não Fiz
     $("#myList li:not([class='current'])");
    // 1H
    $("html img,h3:last");  
    // 1I
    $("#myList li[class='current'] + li").length;



    // 2A
   
     for(i=0 ; i<5 ; i++){
         $("#myList").append('<li> List item ' + ++$("#myList li").length + '</li>');
        
     }

     console.log(document.getElementById('myList'));    
     
     //2B
    $("#myList li:odd").remove();
     
     //2C   
    $('div div[class=module]:last').append('<div class="module"> </div>');
    $("img:first").clone().appendTo($("div[class=module]:last"));  

    // 4A
    console.log($("img[alt]"));

    // 4B,4C
    $("input[type=text]").parent().addClass("template");

    // 4D,4E,4F,4G
 
    $("#myList").find('li[class=current]').removeClass().next('li').addClass('current');

    //4H
    $("#specials").find('h2').text('Promoções').end().find('option[valuefriday]').text("Dimitri");


    //4I
    $("#slideshow").addClass('current').siblings().addClass('disabled');
});