$(function(){
    $(document).bind("contextmenu",function(e){
        return false;
    });
});

function validacion(){
            var formvalido = true;

            var nom = document.getElementById("nombre").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
             var email = document.getElementById("correo").value;
            if(email == null || email.length == 0){
                alert("El correo no puede estar vacío");
                formvalido = false;
            }
             var mens = document.getElementById("mensaje").value;
            if(mens == null || mens.length == 0){
                alert("El mensaje no puede estar vacío");
                formvalido = false;
            }

        }

