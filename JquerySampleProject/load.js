/**
 * Created by kammy on 2/14/2017.
 */
$(document).ready(function () {
    $('#addtocart').click(function () {


        $(".selectcheck").each(function()
        {
            if($(this).is(':checked')) {

                var x = $(this).parent().find('.title').text();
                var y = parseFloat($(this).parent().find('.price').text());
                var pricetotal = 0;
                debugger;
                alert(y);

                $('#myTable').append('<tr><td>title "+x+"</td><td>price "+y+"</td></tr>');
            }));

});
