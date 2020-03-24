// cheeck off todos by clicking

$("ul").on("click", "li", function(){
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

// CLick on X to delete Todo
$("ul").on("click", "span", function(event){
     $(this).parent().fadeOut(500, function(){
          $(this).remove();
     });
     event.stopPropagation();
});

// Enter a new todo
$("input[type='text']").keypress(function(event){
     if (event.which == 13) {
          //grabbing the todo text from input text box
          var todoText = $(this).val();
          // create a new li and span and add to ul
          $("ul").append("<li><span>X</span> " + todoText + "</li>");
          // clear the input
          $(this).val("");
     }
})