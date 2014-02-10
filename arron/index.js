//js

$(".option").each(function() {
 
 $(this).click(function() {
  
  $("#title").empty().load($(this).attr("id") + ".html #title", 
     function() {
      $("#title").fadeIn("2000")
     }); //load title
  
  $("#content").empty().load($(this).attr("id") + ".html #content", 
     function() {
      $("#content").fadeIn("2000")
     }); //load content
 
 }); //click

}); //each  
