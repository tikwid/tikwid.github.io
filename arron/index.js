//js

var pages = ["csnotes", "ideas", "learning", "bookmarks", "opinions", "projects"];

for(var i = 0; i < pages.length; i++) {
 
 $("#" + pages[i] + "_click").click(function () {
  $("#title").empty().load(pages[i] + ".html #title").fadeIn("slow");
  $("#content").empty().load(pages[i] + ".html #content").fadeIn("slow");
  });
  
  console.log(pages[i]);
  
}

