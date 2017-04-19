/**
 * Created by kammy on 1/20/2017.
 */
$(document).ready(function () {

    $("#m1").mouseover(function()
    {
        alert("click to load basic html");
        $("#m1").css('background-color','#dddddd');
    });
    $("#m2").mouseover(function()
    {
        alert("click to load Advanced html");
    });

    $("#submit" ).click(function() {
        var x = $('#login').val;
        var y = $('#pwd').val;

        if (x == y)
        {
            alert("success");
            document.location.href = "home.html";
        } else {
            alert("not success");
        }
    });
    });





