//js

$(".option").each(function() {
 
 $(this).click(function() {
  
  $("#title").empty().load($(this).attr("id") + ".html #title").fadeIn("slow");
  $("#content").empty().load($(this).attr("id") + ".html #content").fadeIn("slow");
  
 });
 
});  
