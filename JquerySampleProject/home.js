/**
 * Created by kammy on 2/4/2017.
 */

$(document).ready(function () {
$('.childclass').hide();
    $('.adultclass').hide();

    $('#btn1').click(function () {
    $('.childclass').toggle();
});
    $('#btn2').click(function () {
        $('.adultclass').toggle();
    });


debugger;
    $.ajax({
        type: 'GET',
        url: 'avi.json',
        dataType: 'json',
        success: jsonParser
    });

});
function jsonParser(json) {
debugger;

    $.getJSON('avi.json', function (avi) {
        $.each(avi.painting, function (kam, v1) {

            var title = v1.title;
            var img = v1.image;
            var price = v1.price;

            $('#ChildrenBookclick').append('<div><input type="checkbox" class=selectcheck><div class=title>'+title+'</div><div><img  src="'+img+' " width="400" height="400" ></div><div class=price>'+price+'</div> </div>');

        });
    });
}
