
//Dont forget the Document selector.

$(document).ready(function(){
    $("h1").click(function(){
        $(this).hide();
    });
});


$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#C0C0C0");
    });
    $("input").blur(function(){
        $(this).css("background-color", "white");
    });
});

$(document).ready(function(){
    $("form").submit(function(){
        alert("Hello my friend!!  " + "You will receive excellents email's!!")
    })
});
