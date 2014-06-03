(function($) {
    $(function() {
        // Sections height & scrolling
        $(window).resize(function() {
            var sH = $(window).height();
            var sHi = sH-(sH*0.35);
            $('section.header-23-sub').css('height', (sH - $('header').outerHeight()) + 'px');
           // $('section:not(.header-10-sub):not(.content-11)').css('height', sH + 'px');
        });        
});


    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });
})(jQuery);


// Cache selectors
var lastId,
    topMenu = $(".top-menu"),
    topMenuHeight = 10,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) {return item;}
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 700);
  e.preventDefault();
  
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";  
   if (lastId !== id) {
   lastId = id;     
       // Set/remove active class 
	   $(".mainnav").parent().removeClass("active");
	   $(".mainnav").filter("[href=#"+id+"]").parent().addClass("active");
   }                    
});

$(document).ready(function(){
    $('.lightbox').nivoLightbox({
	    effect: 'fade'
    });
});
