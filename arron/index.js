//js

$(".option").each(function() {
 
 $(this).click(function() {
  
  $("#title").empty().load($(this).attr("id") + ".html #title").fadeIn("1500");
  $("#content").empty().load($(this).attr("id") + ".html #content").fadeIn("1500");
  
 });
 
});  
