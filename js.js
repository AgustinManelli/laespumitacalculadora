
function calculo(){
    var total = 0;
    var peso = document.getElementById("input__peso").value;
    var porcentaje = document.getElementById("input__porcentaje").value;
    var temp = porcentaje * peso / 100
    total = parseFloat(peso) + parseFloat(temp);
    console.log(total);
    document.getElementById("input__result").value = total;
}