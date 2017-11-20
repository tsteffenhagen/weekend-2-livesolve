$(document).ready(onReady);

function onReady() {
    $('.operButton').on('click', function(){
        var firstValue = $('firstNumber').val();
        var secondValue = $('secondNumber').val();
        var operator = $(this).data('oper');
        calculation(firstValue, secondValue, operator);
    });
}

function calculation (x, y, oper) {
    var mathQuery = {
        firstNum: x,
        secondNum: y,
        operator: oper
    }
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathQuery,
        success: function(response) {
            console.log('Successful POST');            
        },
        error: function(error){console.log('Successful POST');            
    }
    })
}