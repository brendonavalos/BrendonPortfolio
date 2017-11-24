$('.content li').click(function(event) {

    var project = $(event.target).html(); 
    var headerTitle = $('.header-title');
    var projectTitle = $(event.target).attr('id'); 

      

        var images = $(' #'+projectTitle+'.slideshow-image')
        current = 0;
        images.hide();
      
        
        function Rotator() {
           $(images[current]).fadeIn(0);
           $(images[current]).queue(function() {
               current = current < images.length - 1 ? current + 1 : 0;
              
               $(this).dequeue();
                console.log(images.length);
           });
           console.log(current);

           deactivate = current+1;
           	

           if( deactivate == images.length ) {
        	$('body').removeAttr('class');
   			  $('body').addClass('index');
   			  $('.header-title').html('Brendon Avalos');
   			  $('.content li').removeClass('fade-out');
   			  $('.close-title').html('designer in nyc');
   			  $('.scroll-display').css('display','none')
   			  $('.content').css('margin-top','20%')
   			  $('.blurb' ).html(indexinfo);
   			  $('.credits ul' ).html(indexcredits); 
   			  $('.slideshow-image').hide();
   			current=0;


    }
        }





  $('.scroll-display').click(Rotator);
    });



$('.close-title').click(function(){
	current=0;
	$('.slideshow-image').hide();

});


