//js

$("#csnotes_click").click(function () {
  $("#title").empty().load("csnotes.html #title").fadeIn("slow");
  $("#content").empty().load("csnotes.html #content").fadeIn("slow");
  });
