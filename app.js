//Crear una array para almacenar la informacion 
const amigos = []
// Se crea una constante para guardar el elemento input
const inputName = document.getElementById("amigo")
//Se crea una constante para acceder a la lista de amigos
const list = document.getElementById("listaAmigos")


function agregarAmigo() {
    const nombreAmigo= inputName.value.trim()  
    if (nombreAmigo===""){
        alert("Por favor, inserte un nombre")
        return //se usa el return para que una cadena vacia no haga parte del lengh del array
    }else if (amigos.includes(inputName.value)) {
        alert(`El nombre ${inputName.value} ya fue ingresado`)
        return
    }

    if (!isNaN(inputName.value.trim())) {
        alert("Estas ingresando un numero, por favor ingresa un nombre")
        return
    }

    amigos.push(inputName.value)
    
    inputName.value=""
    actualizarLista()   
}
// se agrega la funcionalidad de agregar un amigo al presionar la tecla enter
inputName.addEventListener("keypress",(event) =>{
    if (event.key==="Enter") {
        agregarAmigo()
    }
})

inputName.addEventListener("blur",function()
{actualizarLista})

function actualizarLista(){
    list.innerHTML=""
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li")
        li.textContent=amigos[i]
        list.appendChild(li)
        
    }
    alert("La lista ha sido actualizada")
}

function 