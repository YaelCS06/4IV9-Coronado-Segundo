function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    if(document.formulario1.cantidad.value.trim()/document.formulario1.cantidad.value.trim()==1){
        var valor = document.formulario1.cantidad.value;
        var resultado = parseInt(valor);
        var interes = resultado*0.2;
        var total = resultado + interes;
        document.formulario1.sueldoti.value="$"+total;
        
    }else{
        window.alert("No ingresó una cantidad validad")
    }
}
function sueldoycomi(){
    if(document.formulario2.venta1.value.trim()/document.formulario2.venta1.value.trim()==1&&document.formulario2.venta2.value.trim()/document.formulario2.venta2.value.trim()==1&&document.formulario2.venta3.value.trim()/document.formulario2.venta3.value.trim()==1){
    var vent1=document.formulario2.venta1.value;
    var vent2=document.formulario2.venta2.value;
    var vent3=document.formulario2.venta3.value;
    var com1= parseInt(vent1)*.10;
    var com2= parseInt(vent2)*.10;
    var com3= parseInt(vent3)*.10;
    var sueldoycomi= 4000+com1+com2+com3;
    document.formulario2.total.value="$"+sueldoycomi;
    }else{
    window.alert("No ingresó una cantidad valida")
}
}
function descuentazo(){
    if(document.formulario3.compra.value/document.formulario3.compra.value==1){
    var totalcom=document.formulario3.compra.value;
    var descuento= parseInt(totalcom)*.15;
    var totalapagar=parseInt(totalcom)-descuento;
    document.formulario3.descuento.value="$"+totalapagar;
    }else{
    window.alert("No ingresó una cantidad validad")
}
}
function borrar2(){
    document.formulario3.compra.value="";
    document.formulario3.descuento.value="";
}
function algoritmos(){
    if(document.formulario4.prom.value/document.formulario4.prom.value==1&&document.formulario4.exam.value/document.formulario4.exam.value==1&&document.formulario4.job.value/document.formulario4.job.value==1){
    var promedi=document.formulario4.prom.value;
    var examen=document.formulario4.exam.value;
    var trabaj=document.formulario4.job.value;
    var part1=(parseInt(promedi)*55)/10;
    var part2=(parseInt(examen)*30)/10;
    var part3=(parseInt(trabaj)*15)/10;
    var calif=part1+part2+part3;
    document.formulario4.califi.value=calif/10;
    }else{
    window.alert("No ingresó una cantidad")
    }
}
function porcentaje(){
    if(document.formulario5.alumnos.value/document.formulario5.alumnos.value==1&&document.formulario5.M.value/document.formulario5.M.value==1){
    var todos=document.formulario5.alumnos.value;
    var muje=document.formulario5.M.value;
    var pMuj=(parseInt(muje)*100)/parseInt(todos);
    var pHom=100-pMuj;
    document.formulario5.Muj.value=pMuj+"%";
    document.formulario5.Hom.value=pHom+"%";
    }else{
    window.alert("No ingresó una cantidad")
    }
}
function calcuedad(){
    var fech = new Date(document.formulario6.fecha.value);
    var hoy = new Date();
    var anos = hoy.getFullYear()-fech.getFullYear();
    if(anos<=0||document.formulario6.fecha.value==""){
        alert("Ingrese una fecha valida")
    }else{
    if(fech.getMonth()<hoy.getMonth()){
        document.formulario6.edad.value=anos+ " años";
    }else{
        document.formulario6.edad.value=anos-1+ " años";
    }}
}
function numeros(){
    if(document.formulario1.num1.value.trim()==""||document.formulario1.num2.value.trim()==""){
        alert("No ingreso un numero")
    }else{
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
    }}
}
function mayorque(){
    if (document.formulario2.numr1.value.trim()==""||document.formulario2.numr2.value.trim()==""||document.formulario2.numr1.value.trim()==""){
        alert("No ingreso un numero")
    }else{
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
    }}
}
function pagototal(){
    if (document.formulario3.hrs.value.trim()==""){
        alert("No ingreso las horas")
    }else{
    var horas = parseInt(document.formulario3.hrs.value);

    if (horas<=40){
        var pago = horas*12;
        document.formulario3.hrsn.value= pago; 
        document.formulario3.hrse.value= 0; 
        document.formulario3.hrsex.value= 0; 
        document.formulario3.tot.value=pago; 
    }else{
    if(horas>40&&horas<=48){
        var horse = horas - 40;
        var pago = (horas-horse)*12;
        var pagoext = horse*24;
        var pagot= pago+pagoext;
        document.formulario3.hrsn.value= pago; 
        document.formulario3.hrse.value= pagoext; 
        document.formulario3.hrsex.value= 0; 
        document.formulario3.tot.value=pagot; 
    }else{
        
        var horse = horas - 40;
        var horexe=horse-8;
        var pago = (horas-horse)*12;
        var pagoext = 8*24;
        var pagotri=horexe*36;
        var pagot= pago+pagoext+pagotri;
        document.formulario3.hrsn.value= pago; 
        document.formulario3.hrse.value= pagoext;
        document.formulario3.hrsex.value= pagotri;  
        document.formulario3.tot.value=pagot; 
    }
    }   
    }
}

function utilidad(){
    if (document.formulariof.tiempo.value.trim()==""){
        alert("No ingreso los años")
    }else{
    var tiemp= parseInt(document.formulariof.tiempo.value);
    if(tiemp<1){
        document.formulariof.util.value="5%";
    }else{
        if(tiemp>=1&&tiemp<2){
            document.formulariof.util.value="7%";
        }else{
            if(tiemp>=2&&tiemp<5){
                document.formulariof.util.value="10%";
            }else{
                if(tiemp>=5&&tiemp<10){
                    document.formulariof.util.value="15%";
                }else{
                    if(tiemp>=10){
                    document.formulariof.util.value="20%";
                }else{
                    alert("Ingrese un valor valido");
                }
            }
        }
    }

    }
}}
