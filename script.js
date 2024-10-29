function incorrecto(){

alert("respuesta inccorrecta");
const contenedor = document.querySelector('.contenedor'); // Agrega la animación usando el estilo inline contenedor.style.animation = 'shake 0.5s easy-in-out'; // Elimina la animación después de que termine para que pueda repetirse
 setTimeout(() => { contenedor.style.animation = ''; }, 500); // Duración de la animación (0.5s) }
// Definir la animación con fotogramas clave en JavaScript
 const style = document.createElement('style'); style.innerHTML = ` @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); }
60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); } } `; document.head.appendChild(estilo);
}

function mostrarpre2(){

    let ocultar=document.getElementById("pre1")
    let mostrar=document.getElementById("pre2")

    ocultar.style.display="none"
    mostrar.style.display="flex"
}

function mostrarpre3(){

    let ocultar=document.getElementById("pre2")
    let mostrar=document.getElementById("pre3")

    ocultar.style.display="none"
    mostrar.style.display="flex"
}

function mostrarpre4(){

    let ocultar=document.getElementById("pre3")
    let mostrar=document.getElementById("pre4")

    ocultar.style.display="none"
    mostrar.style.display="flex"
}

function mostrarpre5(){

    let ocultar=document.getElementById("pre4")
    let mostrar=document.getElementById("pre5")

    ocultar.style.display="none"
    mostrar.style.display="flex"
}

function mostrarcorrecto(){

    let ocultar=document.getElementById("pre5")
    let mostrar=document.getElementById("bien")

    ocultar.style.display="none"
    mostrar.style.display="flex"
}