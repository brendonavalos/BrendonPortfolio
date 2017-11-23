  

  $('.content li').hover(function(){
  		$(this).addClass('opacity-full');   
        $('.content li').addClass('opacity-fade');    
    },     
    function(){    
        $('.content li').removeClass('opacity-fade'); 
        $(this).removeClass('opacity-full');       
    });
  