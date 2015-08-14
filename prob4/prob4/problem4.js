/*
Problem 4: Functions

Write two functions, getUserInput and setOutput.

Do NOT modify the document ready function.
*/

$(document).ready(function() {
  
    $('#add').on('click', function() {
        var one = parseInt(getUserInput('.input1'));
        var two = parseInt(getUserInput('.input2'));

        var output = one + two;

        setOutput('.output1', one);
        setOutput('.output2', two);
        setOutput('#output', output);
    });
});

/*
Write the getUserInput function here

Its should only accept 1 parameter, a css selector for the input element
It should return the value in the input field
*/

function getUserInput(inputNumber) {
    if (inputNumber == '.input1') {
        var one = $('.input1').val();
        return one;
    }

    else {
        var two = $('.input2').val();
        return two;
    }
}

/*
Write the setOutput function here

It should accept a two parameters, the css selector and the text used to set
*/

function setOutput(css, number) {
    if (css === '.output1') {
        $('.output1').text(number);
    }
    if (css === '.output2') {
        $('.output2').text(number);
    }
    else {
        $('#output').text(number);
    }
}