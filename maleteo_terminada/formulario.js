document.addEventListener("DOMContentLoaded", function () {
    console.log('Your document is ready!');


var validar = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var expresion = /\w+@\w+\.+[a-z]/;  //carateres validos para un email
    var check = privacity.checked;  // comprueba que la casilla este marcada como check

    if (name === "" || email === "") { //si nombre o email vacios
        alert("por favor rellene todos los campos");  //sacar alerta
        return false;
    } else if (!expresion.test(email)) {  //si los caracteres no son validos
        alert("La dirección de email no es válida.");  //sacar alerta
        return false;
    } else if (!check) {   // si no se ha marcado la casilla
        alert("Debes aceptar la politica de privacidad");  //alerta
        return false;
    }else {
        return true; //si todo lo anterior es false return true
    }
}


const formulario = document.getElementById('formulario');
formulario.addEventListener("submit", (event) => {       //al addeventlis..le cae un evento (funcion)
    event.preventDefault();      //para parar el submit y que no recargue la pag de nuevo
    console.log("event"); 
   
    if (validar()){   //si mi funcion validar se cumple entonces hago lo siguiente
       
            const url = event.target.getAttribute("action"); //creo una cte que obtiene el elemento que desencadena el evento "action"
            const method = event.target.getAttribute("method"); //creo una cte que obtiene el elemento que desencadena el evento "method"
            const formData = new FormData(event.target)   // creo una variable formdata que es el constructor de un formulario que devuelve un objeto
            fetch(url,{    //llamo a la cte url
                method,     //llamo a la cte method
                body: formData  //
            }).then((respuesta)=>{   //ese then hace una funcion (respuesta)
                    respuesta.json() //la respuesta es un archivo .json con los datos del formulario
                    .then(()=> {    //despues es un metodo que devuelve una promesa que es una funcion
                        var form = document.getElementById('the-f'); //creo una variable que es el Id 'the-f'
                        form.classList.add ("mensaje"); // y le añado una clase que va a ser 'mensaje'
                    })   
            })
    }
});

});






