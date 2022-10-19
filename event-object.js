$(function () {

    $('li').on('click', function (e) {
        $('li.span').remove();
        var dete = new Date();
        date.setTime(e.timeStamp);
        var clicked = dete.toDateString();
        $(this).append('<span class="date">' + clicked + '' + e.type + '</span>');
    });
    
});