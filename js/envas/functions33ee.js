  //LOADER
//  $(window).on("load",function(){ "use strict";
  //  $(".loader").fadeOut(800);
//  });
  

jQuery(function($) {"use strict";

  // Smooth Scroll
	 var $root = $("html, body");
	 $(".scrolling").on("click", function() {
	   $root.animate({
		  scrollTop: $( $.attr(this, "href") ).offset().top
	   }, 700);
	   return false;
	 });
	
	
  //Back to Top
  $("body").append('<a href="#" class="back-to"><i class="icon-uniE7D0"></i></a>');
	 var amountScrolled = 700;
	 var backBtn= $("a.back-to");
	 $(window).on("scroll", function(){
	  if ( $(window).scrollTop() > amountScrolled ) {
		  backBtn.fadeIn("slow");
	  } else {
		  backBtn.fadeOut("slow");
	  }
	 });
	 backBtn.on("click", function(){
		 $("html, body").animate({
			 scrollTop: 0
		 }, 700);
		 return false;
	 });	
	
	//Header Scroll
	var stickyheader=$(".layout_first, .layout_sixth, #layout_bottom");
   $(window).on("scroll", function(event) {
        if ($(window).scrollTop() > 50) {
            stickyheader.addClass("stick");
        } else {
            stickyheader.removeClass("stick");
        }
		  event.preventDefault(); 
    });
	
	// Push Menus 
	var $menuLeft = $(".pushmenu-left");
	var $menuRight = $(".pushmenu-right");
	var $toggleleft = $("#menu_bars.left");
	var $toggleright = $("#menu_bars.right");
	$toggleleft.on("click", function() {
	  $(this).toggleClass("active");
	  $(".pushmenu-push").toggleClass("pushmenu-push-toright");
		$menuLeft.toggleClass("pushmenu-open");
		return false;
	 });
	 $toggleright.on("click", function() {
		 $(this).toggleClass("active");
		 $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
		  $menuRight.toggleClass("pushmenu-open");
		  return false;
	 });
		
		
  // Accorduions
  $(".accordion_title").on("click", " > a", function(){
	 if($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).siblings(".content").slideUp(200);
		$(".accordion_title > a i").removeClass("fa-minus").addClass("fa-plus");
	 }
	 else{
	 $(".accordion_title > a i").removeClass("fa-minus").addClass("fa-plus");
	 $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
	 $(".accordion_title > a").removeClass("active");
	 $(this).addClass("active");
	 $(".content").slideUp(200);
	 $(this).siblings(".content").slideDown(200);
	 }
  
  });
	 
  // tabbed content 
  $(".tab_content").hide();
  $(".tab_content:first").show();
// if in tab mode 
  $("ul.tabs").on("click","li", function() {
		$(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();		
		  $("ul.tabs li").removeClass("active");
		  $(this).addClass("active");
		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    });
	// if in drawer mode on Mobile Version
	$(".tab_drawer_heading").on("click", function() {
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn(1200);
	    $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
	    $("ul.tabs li").removeClass("active");
	    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
		

   // Fun Facts
//	 $(".number-counters").appear(function () {
//		$(".number-counters [data-to]").each(function () {
//		  var e = $(this).attr("data-to");
//		  $(this).delay(200).countTo({
//			 from: 1,
//			 to: e,
//			 speed: 1500,
//			 refreshInterval: 50
//		  })
//		})
//	 });

	 

	 
	 
	
	// ========== Revolution Slider ============ 
	 var revapi;
	 revapi = jQuery("#rev_slider").revolution({
	 sliderType:"standard",
	 sliderLayout:"fullwidth",
	 scrollbarDrag:"true",
	 delay:9000,
	 spinner: "off",
	  navigation: {
		arrows:{enable:true},
		touch:{
				  touchenabled:"on",
				  swipe_threshold: 75,
				  swipe_min_touches: 1,
				  swipe_direction: "horizontal",
				  drag_block_vertical: false
			  }
	  },
			responsiveLevels:[4096,1024,778,480],
         gridwidth: [1170, 960, 750, 480],
         gridheight: [690, 600, 500, 300],		
		});
		
		//Home2
	 var revapi;
	 revapi = jQuery("#rev_slider_second").revolution({
	 sliderType:"standard",
	 sliderLayout:"fullwidth",
	 scrollbarDrag:"true",
	 delay:9000,
	 spinner: "off",
	  navigation: {
		arrows:{enable:true},
		touch:{
				  touchenabled:"on",
				  swipe_threshold: 75,
				  swipe_min_touches: 1,
				  swipe_direction: "horizontal",
				  drag_block_vertical: false
			  }
	  },
			responsiveLevels:[4096,1024,778,480],
         gridwidth: [1170, 960, 750, 480],
         gridheight: [600, 500, 400, 300],		
		});

		
		//Fullscreen
		var revapi = jQuery("#rev_full").revolution({
			sliderType:"standard",
			scrollbarDrag:"true",
			spinner: "off",
			sliderLayout:"fullscreen",
			delay:9000,
			navigation: {
				arrows:{enable:true}				
			},
			responsiveLevels:[4096,1024,778,480],
         gridwidth: [1170, 960, 750, 480],
         gridheight: [720, 600, 500, 300],			
		});
		
		//Video Background
		var revapi = jQuery("#rev_video").revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			delay:9000,
			spinner: "off",
			navigation: {
				arrows:{enable:true}				
			},			
			gridwidth:1170,
			gridheight:700		
		});				
  
  
   // =========== Parallax ===========
	 $(".parallax").parallax("50%", 0.3);
	 $(".parallax_one").parallax("50%", 0.3);
	 $(".parallax_two").parallax("50%", 0.3);
	 $("#bg-video").parallax("50%", -0.7);
	 $(".parallax_news").parallax("50%", -0.5);
	 $(".parallax_bg_slider").parallax("50%", -0.5);
	 $(".page_header").parallax("50%", -0.5);
	 
  
  


	 //Initiat WOW JS if you want on scrolling transitions
	//	 if ($(window).width() > 767) {
	//	 new WOW().init();
	// }



}); 



