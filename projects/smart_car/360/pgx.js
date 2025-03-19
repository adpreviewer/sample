//=====================
// VARIABLES
//=====================
var canResize = false;


//=====================
// FUNCTIONS
//=====================

//Start Function
function jiStartPGX(){
  /*Wrapper Fade In Animation*/
  TweenMax.to($('#wrapper'), .5, {opacity: 1, ease:Power0.easeNone });

  //Animations Here

}


$(document).ready(function () {
 
    gSwipe();
  
    setInit();
//    addBtnLeft() 
//    addBtnRight();
    clickAdd()

});



//=====================
// EVENT LISTENERS
//=====================


//=====================
// TRIGGER FUNCTIONS
//=====================
TweenMax.set($('#wrapper'), { opacity: 1 });

function setInit() {
     TweenMax.set($('.copy_1, .copy_2'), { opacity: 0 });
     TweenMax.set($('.find_out_cta'), { opacity: 0, display: "none" });
     startAnimation();
}

function startAnimation() {
    TweenMax.to($('.copy_1'),1, { opacity: 1 });
    TweenMax.to($('.copy_2'),1, { opacity: 1, delay: 1.5 });
    TweenMax.to($('.find_out_cta'),1, { opacity: 1, display: "block", delay: 2.5 });
    
    TweenMax.fromTo($('.rotate_message'),1, { opacity: 0 }, {opacity: 1, repeat: 5, yoyo: true, onComplete: function() {
        TweenMax.to($('.rotate_message'),1, { opacity: 1 });
    }});
    carRotateAnimate()
}



function carRotateAnimate() {
     currentNum = 18;
     animateRotate = setInterval(function(){ 
            currentNum++;
            if (currentNum <= 35) {
                console.log(currentNum)
            } else {
                clearInterval(animateRotate)
                carRotateAnimate2()
            }
            TweenMax.set($('#myImg'), {attr:{src:'car_'+currentNum+'.png'}});
     }, 100); 
}




function carRotateAnimate2() {
     currentNum = 1;
     animateRotate2 = setInterval(function(){ 
            currentNum++;
            if (currentNum <= 5) {
                console.log(currentNum)
            } else {
                clearInterval(animateRotate2)
            }
            TweenMax.set($('#myImg'), {attr:{src:'car_'+currentNum+'.png'}});
     }, 100); 
}


///CLICK EVENT OPTION 2 Buttons 
function clickAdd() {
     $('.nav_btn').click(function () {
        console.log("a")
        var className = $(this).attr('class');
        console.log(className)
       switch (className) {
           case 'btn_360_parent nav_btn':
                TweenMax.set($('.btn_360_active'), {opacity: 1});
                TweenMax.set($('.btn_video_active'), {opacity: 0});
                TweenMax.set($('.car_360_parent'), {zIndex: 2});
                TweenMax.set($('.video_thumb_parent'), {zIndex: 1});
                console.log("1")
               break;
           case 'btn_video_parent nav_btn':
                console.log("2")
                TweenMax.set($('.btn_360_active'), {opacity: 0});
                TweenMax.set($('.btn_video_active'), {opacity: 1});
                TweenMax.set($('.car_360_parent'), {zIndex: 1});
                TweenMax.set($('.video_thumb_parent'), {zIndex: 2});
               break;
         
       }
     
   });
}


//GSAP SWIPE

//var ctr;


function gSwipe() {
    
var ctr = 1;
var seqInterval;
var mousedownID = -1;

var frameTotal = 36;
var offset = 10;

var ctr = 1;
var currentCtr = 1;
var posX;

    
	var container = $("#car_360_parent_drag");
	var containerMouseX;
    
	var frameWidth = $("#car_360_parent_drag").width();

	$(window).on("mousedown touchstart touchdown", mouseDownHandler);
	$(window).on("mouseup touchend", mouseUpHandler);

	function mouseDownHandler (e) {
        TweenMax.to($('.rotate_message'),1, { opacity: 0, display: "none" });
        containerMouseX = e.clientX;
        if ( (device.mobile()) || (device.tablet()) )  {
        containerMouseX = e.originalEvent.touches[0].pageX;
        }
        container.on("mousemove touchmove", mouseMoveHandler);
        
	}

	function mouseUpHandler (e) {

		container.off("mousemove touchmove", mouseMoveHandler);
        $(window).off("mousemove touchmove", mouseMoveHandler);
		currentCtr = ctr;
	}

	function mouseMoveHandler (e) {

		var delta = e.clientX - containerMouseX;
        
           if ( (device.mobile()) || (device.tablet()) )  {
               delta = e.originalEvent.touches[0].pageX - containerMouseX;
        }
		
        
        
		ctr = Math.floor(delta * frameTotal / frameWidth) + currentCtr;

		if (ctr < 1) { 

			ctr = frameTotal + ctr % frameTotal;
			// ctr = 0;
		}
		
		if (ctr > frameTotal - 0) { 

			ctr = ctr % frameTotal;
			// ctr = frameTotal -1;
		}

//		posX = '-'+ ((frameWidth + offset) * ctr) + 'px 0px';

//		TweenMax.set(sprite, {backgroundPosition: posX, ease: SteppedEase.config(frameTotal)});	
        document.getElementById("myImg").src="car_"+ctr+".png";
        //console.log(ctr)
	}
    
   

    
}


function clickAdd() {
     $('.nav_btn').click(function () {
        console.log("a")
        var className = $(this).attr('class');
        console.log(className)
       switch (className) {
           case 'btn_360_hit nav_btn':
                TweenMax.set($('.btn_360_active'), {opacity: 1});
                TweenMax.set($('.btn_video_active'), {opacity: 0});
                TweenMax.set($('.car_360_parent'), {zIndex: 2});
                TweenMax.set($('.video_thumb_parent'), {zIndex: 1});
                closeVideo();
               break;
           case 'btn_video_hit nav_btn':
                console.log("2")
                TweenMax.set($('.btn_360_active'), {opacity: 0});
                TweenMax.set($('.btn_video_active'), {opacity: 1});
                TweenMax.set($('.car_360_parent'), {zIndex: 1});
                TweenMax.set($('.video_thumb_parent'), {zIndex: 2});
               break;
         
       }
     
   });
  
  $('.video_thumb_parent').click(function () {
      if(device.desktop()) {
         openVideo();
      } else {
        openVideo();
      }
     
  });
  $('.video_close, .video_dark_bg').click(function () {
      closeVideo();
  }); 
}

function updateButtons() {
    TweenMax.set($('.btn_360_active'), {opacity: 0});
    TweenMax.set($('.btn_video_active'), {opacity: 1});
    TweenMax.set($('.car_360_parent'), {zIndex: 1});
    TweenMax.set($('.video_thumb_parent'), {zIndex: 2});
}

function openVideo() {
  
   TweenMax.set($('.video_overlay_parent'), {display: "block", zIndex: 3}); 
   TweenMax.set($('.video_close'), {display: "block", zIndex: 4}); 
    
    
 
}




function closeVideo() {
  TweenMax.set($('.video_overlay_parent'), {display: "none"}); 

}