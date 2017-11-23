// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration:0,
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin(".sticky") // the element we want to pin
.addTo(controller);
