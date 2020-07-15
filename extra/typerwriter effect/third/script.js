var content = "Yes I am here and this is a very basic webpage of sorts. Wouldn't it be cool if there was a body? How about you have some buttons? You would like that.";

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('p').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});