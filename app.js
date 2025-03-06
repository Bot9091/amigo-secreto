//Crear una array para almacenar la informacion 
const amigos = []
const inputName = document.getElementById("amigo")



function agregarAmigo() {

       
    if (inputName.value===""){
        alert("Por favor, inserte un nombre")
        return //se usa el return para que una cadena vacia no haga parte del lengh del array
    }else if (amigos.includes(inputName.value)) {
        alert(`El nombre ${inputName.value} ya fue ingresado`)
        return
    }

    if ((inputName)=>inputName.value == Number.parseInt(inputName.value)){
        alert("Estas ingresando un numero, por favor ingresa un nombre")
        return
    }




    amigos.push(inputName.value)
    console.log(amigos)

    inputName.value=""
       
}

inputName.addEventListener("keypress",(event) =>{
    if (event.key==="Enter") {
        agregarAmigo()
    }
})
