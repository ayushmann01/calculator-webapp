let input = $(".input-exp");

$(".btn").click((event) => {
    let clickedButton = event.target.value;
    // console.log(clickedButton);

    switch (clickedButton) {
        case '0':
            setInputExp('0');
            break;
        case '1':
            setInputExp('1');
            break;
        case '2':
            setInputExp('2');
            break;
        case '3':
            setInputExp('3');
            break;
        case '4':
            setInputExp('4');
            break;
        case '5':
            setInputExp('5');
            break;
        case '6':
            setInputExp('6');
            break;
        case '7':
            setInputExp('7');
            break;
        case '8':
            setInputExp('8');
            break;
        case '9':
            setInputExp('9');
            break;
        case '+':
            setInputExp('+');
            break;
        case '-':
            setInputExp('-');
            break;
        case '*':
            setInputExp('*');
            break;
        case '/':
            setInputExp('/');
            break;
        case '=':
            answer();
            break;
        case 'all-clear':
            clearInputExp('');
            break;
        case '.':
            setInputExp('.');
            break;
        default:
            alert("failed");
    }

});

$(document).on("keydown", (event) => {
    // console.log(event.key);
    if (event.key === '='){
        answer();
    }
});

function setInputExp(val) {
    //  console.log(val + " added");
    input.val(input.val() + val);
}

function clearInputExp() {
    input.val("");
};

function answer() {
        let exp = input.val();
        input.fadeOut(100).fadeIn(100);
        input.val(eval(exp));
}