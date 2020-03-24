// cheeck off todos by clicking

$("li").click(function(){
     // if li is gray
     // if ($(this).css("color") == "rgb(128, 128, 128)") {
     //      $(this).css("color", "black");
     //      $(this).css("text-decoration", "none");
     // }
     // if li is black
     // else {
     //      $(this).css("color", "gray");
     //      $(this).css("text-decoration", "line-through");
     // }

     // this one line toggles a css class
     $(this).toggleClass("completed");
});
