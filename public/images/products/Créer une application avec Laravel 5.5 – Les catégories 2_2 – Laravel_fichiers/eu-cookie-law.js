/* Do not modify this file directly. It is compiled from other files. */
!function(e){var o,a,t=document.cookie.replace(/(?:(?:^|.*;\s*)eucookielaw\s*\=\s*([^;]*).*$)|^.*$/,"$1"),i=e("#eu-cookie-law");if(i.hasClass("top")&&e(".widget_eu_cookie_law_widget").addClass("top"),i.hasClass("ads-active")){var s=document.cookie.replace(/(?:(?:^|.*;\s*)personalized-ads-consent\s*\=\s*([^;]*).*$)|^.*$/,"$1");""!==t&&""!==s&&i.remove()}else""!==t&&i.remove();e(".widget_eu_cookie_law_widget").appendTo("body").fadeIn(),i.find("form").on("submit",d),i.hasClass("hide-on-scroll")?(o=e(window).scrollTop(),a=function(){Math.abs(e(window).scrollTop()-o)>50&&d()},e(window).on("scroll",a)):i.hasClass("hide-on-time")&&setTimeout(d,1e3*i.data("hide-timeout"));var n=!1;function d(o){if(!n){n=!0,o&&o.preventDefault&&o.preventDefault(),i.hasClass("hide-on-scroll")&&e(window).off("scroll",a);var t=new Date;t.setTime(t.getTime()+24*i.data("consent-expiration")*60*60*1e3),document.cookie="eucookielaw="+t.getTime()+";path=/;expires="+t.toGMTString(),i.hasClass("ads-active")&&i.hasClass("hide-on-button")&&(document.cookie="personalized-ads-consent="+t.getTime()+";path=/;expires="+t.toGMTString()),i.fadeOut(400,function(){i.remove();var e=document.querySelector(".widget.widget_eu_cookie_law_widget");e.parentNode.removeChild(e)})}}}(jQuery);