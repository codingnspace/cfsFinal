/*
Problem 2:

jQuery has been imported for you.

A client has contacted you because they've written terrible JavaScript.
Repair their code! There are 10 bugs in the code. Make a short description of what you've fixed.

1.  added single quotes to css method in doc ready function
2.  added () after function in doc ready function
3.  deleted period from ul bc not a class
4.  deleted period from p tag bc not a class
5.  jquerified doc ready function
6.  ?
7.  ?
8.  ?
9.  ?
10. ?
*/

$(document).ready(function (){
    $('nav ul li').css('list-style-type', 'square');

    //$('.count').text('p'.text.split().length());
    
        var count = $('p').text().split(' ').length;
    
    $('.count').text(count);
});

