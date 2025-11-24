function sumarInputs() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    suma(a, b);
}

function suma(a, b) {
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var sum = num1 + num2;
    console.log(sum);
}