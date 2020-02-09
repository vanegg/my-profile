$(window).load(function() {
	"use strict";
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
 
    });
});
     function a() {
        $(".logo-inner").css({
            "margin-top": -1 * $(".logo-inner").height() / 2 + "px"
        });
         $(".box-inner").css({
            "margin-top": -1 * $(".box-inner").height() / 2 + "px"
        });
 		
    }
    a();
	$(window).resize(function() {
       a(); 
    });