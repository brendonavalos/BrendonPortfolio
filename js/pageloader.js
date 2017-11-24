$('.content li').click(function(event) {

	 var project = $(event.target).html(); 
    var headerTitle = $('.header-title');
    var projectTitle = $(event.target).attr('id'); 

 




    
    if($(event.target).is(event.target)) {
       headerTitle.html(project);
       $('.close-title').html('index');
       $('body').addClass(projectTitle);
       $('.content li').addClass('fade-out');
       $('.credits ul').html(sprayscapecredits);
       $('.content').css('margin-top','0%')
       $('.header').addClass('fixed')

    } 


    var sprayscapeinfo = "An app created to make the world of VR messy, fun, and easy to create.";
    var sprayscapecredits = "<li>Created with:</li> <li>This Also</li><li></li><li>Role:</li><li>Designer</li>";
	  if ($("body").hasClass("sprayscape")) {
    $('.scroll-display .sprayscape').addClass('flex')
	  $('.blurb' ).text(sprayscapeinfo);
    $('.credits ul' ).html(sprayscapecredits); 
    
	}



	var oooinfo = "An app that ads zooming and music together.";
    var ooocredits = "<li>Created with:</li> <li>This Also</li><li></li><li>Role:</li><li>Branding, Sound Design, UI</li>";
	if ($("body").hasClass("ooo")) {
  $('.scroll-display.ooo').addClass('flex')
	$('.blurb' ).text(oooinfo);
	$('.credits ul' ).html(ooocredits); 
  
      
	}

    var cultivarinfo = "An app that ads zooming and music together.";
    var cultivarcredits = "<li>Created with:</li> <li>This Also</li><li></li><li>Role:</li><li>Branding, Sound Design, UI</li>";
  if ($("body").hasClass("cultivar")) {
  $('.scroll-display.cultivar').addClass('flex')
  $('.blurb' ).text(cultivarinfo);
  $('.credits ul' ).html(cultivarcredits); 
  
      
  }



});





var indexinfo = "&#9312;I am a designer in NYC working at This Also &#9313;When I’m not at work I enjoy making music as B Boys & Gift Wrap. &#9314;When I’m not making music I am usually taking on freelance projects or making things for fun. &#9315;Feel free to get in touch.";
var indexcredits = " <li>Contact:</li><li>avalos.brendon@gmail.com</li><li>Fonts in Use:</li><li>F37 Bolton, Marcellus</li>"

$('.close-title').click(function(){
   $('body').removeAttr('class');
   $('body').addClass('index');
   $('.header-title').html('Brendon Avalos');
   $('.content li').removeClass('fade-out');
   $('.close-title').html('designer in nyc');
   $('.scroll-display').removeClass('flex')
   $('.content').css('margin-top','20%')
   $('.blurb' ).html(indexinfo);
   $('.credits ul' ).html(indexcredits); 
});






