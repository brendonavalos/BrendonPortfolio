
var controller = new ScrollMagic.Controller();    
    
    
//LOOP   
    
$('.sticky').each(function(){
    


//build a scene
    
    var scene = new ScrollMagic.Scene({
    triggerElement:this, // starting scene, when reaching this element
    triggerHook:0.1,
    duration: 0// pin the element for a total of 400px
    })
    .setPin(this); // the element we want to pin

    // Add Scene to ScrollMagic Controller
    controller.addScene(scene);
    
});
