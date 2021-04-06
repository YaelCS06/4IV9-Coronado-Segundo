function numeros(){
    var num1 = parseInt(document.formulario1.num1.value);
    var num2 = parseInt(document.formulario1.num2.value);

    if(num1==num2){
        var total =num1*num2;
        document.formulario1.Resultado.value=total;
    }else{
        if(num1>num2){
        var total =num1-num2;
        document.formulario1.Resultado.value=total;
        }else{
        var total =num1+num2;
        document.formulario1.Resultado.value=total;
        }
    }
}
function borrar(){
    document.formulario1.Resultado.value="";
    document.formulario1.num2.value="";
    document.formulario1.num1.value="";
}

function mayorque(){
    var num1 = parseInt(document.formulario2.numr1.value);
    var num2 = parseInt(document.formulario2.numr2.value);
    var num3 = parseInt(document.formulario2.numr3.value);

    if(num1>num2&&num1>num3){
        document.formulario2.elmayor.value=num1;
    }else{
        if(num2>num1&&num2>num3){
        document.formulario2.elmayor.value=num2;
        }else{
        if(num3>num1&&num3>num2){
        document.formulario2.elmayor.value=num3;
        }else{
        window.alert("Ingreso numeros iguales");
        }
        }
    }
}
function borrar1(){
    document.formulario2.numr1.value="";
    document.formulario2.numr2.value="";
    document.formulario2.numr3.value="";
    document.formulario2.elmayor.value="";
}
