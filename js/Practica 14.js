$(function(){
    var cadena="";
    for(var i=1; i<10;i++){
        cadena+="Valor de i = " + i + "<br />";
    }
    cadena+='<button id="btnpresion"> Presioina...</button>';
    $("#numeros").html(cadena);

    
    $("#mcasillas").click(function(){
        var inputs = "";
        ncalificaciones = $("#txtcalif").val();
        for(var j=0;  j<ncalificaciones; j++){
            inputs+='<input type="text" name="materia'+j+'" id="materia'+j+'" placeholder="materia '+ j + '" ><br>';
        }   
        $("#materias").html(inputs);
    });
  

    $("form").submit(function(event){
        event.preventDefault();
        var cjson = $(this).serializeArray();
        alert("se detuvo el envio..." + cjson);
        console.log(cjson);
    });
});