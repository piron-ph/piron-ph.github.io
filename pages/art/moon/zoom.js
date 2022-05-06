var windowSize = $(window).width();

$( window ).resize(function() {
  windowSize = $(window).width();
});	



  if (windowSize > 767) {
    
	var controller = new ScrollMagic.Controller();

 	var zoomHeader = TweenMax.to("#header", 0.5, {scale: 22, ease: Circ.EaseIn});

	var zoomOne = TweenMax.to("#one", 0.5, {scale: 100, ease: Circ.EaseIn});
  var zoomTwo = TweenMax.to("#two", 0.5, {scale: 100, ease: Circ.EaseIn});
  var zoomThree = TweenMax.to("#three", 0.5, {scale: 100, ease: Circ.EaseIn});
 var zoomFour = TweenMax.to("#four", 0.5, {scale: 6, ease: Circ.EaseIn});


	var headerZoom = new ScrollMagic.Scene({
    triggerElement: "#header", 
    triggerHook: 0, 
    duration: "300%"
  })
             .setPin('#header')
             .setClassToggle('#header', 'showing')
					   .setTween(zoomHeader)
            .addIndicators({name: 'header zoom'})
    				 .addTo(controller);


	var sceneOneZoom = new ScrollMagic.Scene({
    triggerElement: "#one", 
    triggerHook: 0,
    duration: "300%"
  })
             .setPin('#one')
             .setClassToggle('#one', 'showing')
					   .setTween(zoomOne)
            .addIndicators({name: 'Scene 1 zoom'})
    				 .addTo(controller);
         

	var sceneTwoZoom = new ScrollMagic.Scene({
    triggerElement: "#two", 
    triggerHook: 0,
    duration: "300%"
  })
             .setPin('#two')
             .setClassToggle('#two', 'showing')
					   .setTween(zoomTwo)
            .addIndicators({name: 'Scene 2 zoom', indent: 400})
    				 .addTo(controller);


	var sceneThreeZoom = new ScrollMagic.Scene({
    triggerElement: "#three", 
    triggerHook: 0, 
    duration: "300%"
  })
             .setPin('#three')
             .setClassToggle('#three', 'showing')
					   .setTween(zoomThree)
            .addIndicators({name: 'Scene 3 zoom', indent: 800})
    				 .addTo(controller);

	var sceneFourZoom = new ScrollMagic.Scene({
    triggerElement: "#four", 
    triggerHook: 0, 
    duration: "100%"
  })
             .setPin('#four')
             .setClassToggle('#four', 'showing')
					   .setTween(zoomFour)
             .addIndicators({name: 'Scene 4 zoom'})
    				 .addTo(controller);

}

var documentHeight = document.body.clientHeight;
var windowHeight = $('#wow').height();
var bottomPoint = documentHeight - windowHeight;


$( window ).scroll(function() {
    var scrollTop = $(window).scrollTop();
  
    console.log(scrollTop);
    console.log(bottomPoint);
  
    if ( scrollTop > bottomPoint ) {
      $('#four a').addClass('email-showing');
    } else {
       $('#four a').removeClass('email-showing');
    }
});

