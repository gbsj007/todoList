//todo click Off the specific todos by clicking.
$("ul").on("click", "li", function(){
    //todo if color is grey.
    // if($(this).css("color") === "rgb(128, 128, 128)") {
    //todo change it to black.
    //     $(this).css({
    //         color : "black",
    //         textDecoration : "none"
    //     });
    // }
    //todo else change it to grey.
    // else {
    //     $(this).css({
    //         color : "grey",
    //         textDecoration : "line-through"
    //     });
    // }

    //todo This line works same as code written above.
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //todo Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //todo creating a new li and add to ul
        $("ul").append(`<li><span><i class="fas fa-trash"></i></span> ${todoText}</li>`);
    }
});

$(".fa-pen-square").click(function(){
    $("input[type = 'text']").fadeToggle();
})