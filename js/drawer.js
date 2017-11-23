$(".open").click(function() {
  $(".info" ).toggleClass( "show");
  $(".credits, .blurb" ).toggleClass( "visible");
  $('.open').text(function(i, text){
          return text === "CLOSE" ? "INFO" : "CLOSE";
      });   
});

