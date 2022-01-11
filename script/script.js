import mostrarBarras from "./grafica.js";

const tablas = document.querySelector("#tablas")
const btnCalcular = document.getElementById('calcula');
const IMC = document.getElementById('IMC')
const lectura = document.getElementById('lectura')
const mensaje = document.getElementById('mensaje')
let dato = JSON.parse(localStorage.getItem('datos')) || []
const btnPromediar = document.getElementById('promedio')
const estadisticas = document.getElementById('estadisticas')
let formulario = document.querySelector('.calculadora')
let contenedor = document.querySelector("#bar-example")

document.addEventListener("DOMcontentLoaded", () => {
    contenedor.innerHTML = ""
    mostrarBarras()

})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const kilos = document.getElementById('kilos').value;
    const altura = document.getElementById('altura').value;
    const edad = document.getElementById('edad').value;

    let seleccionSexo = document.getElementsByName('genero');
    let sexo
    for (let index = 0; index < seleccionSexo.length; index++) {
        if (seleccionSexo[index].checked) {
            sexo = seleccionSexo[index].value
        }

    }

    let alturaCm = altura / 100
    let imcx = Number((kilos / (alturaCm * alturaCm)).toFixed(2))
    lectura.innerHTML = ''
    lectura.innerHTML = `<button>${imcx}</button>`
    if (localStorage.getItem("conteo") == null) {
        let conteo = {
            conteoHombres: [0, 0, 0, 0, 0],
            conteoMujeres: [0, 0, 0, 0, 0],
        }
        localStorage.setItem("conteo", JSON.stringify(conteo))
    }
    mostrar(imcx, kilos, altura, edad, sexo)
    tablas.querySelector("#a").setAttribute("class", "defecto")
    tablas.querySelector("#b").setAttribute("class", "defecto")
    tablas.querySelector("#c").setAttribute("class", "defecto")
    tablas.querySelector("#d").setAttribute("class", "defecto")
    tablas.querySelector("#e").setAttribute("class", "defecto")

    if (imcx < 18.5) {
        tablas.querySelector("#a").setAttribute("class", "azul")
        let actual = JSON.parse(localStorage.getItem("conteo"))
        if (sexo == "hombre") {
            actual.conteoHombres[0] += 1
        } else {
            actual.conteoMujeres[0] += 1
        }

        localStorage.setItem("conteo", JSON.stringify(actual))

    } else if (imcx >= 18.5 && imcx <= 24.99) {
        tablas.querySelector("#b").setAttribute("class", "amarillo")
        let actual = JSON.parse(localStorage.getItem("conteo"))
        let nuevo = actual.conteoHombres
        console.log(nuevo[0])
        if (sexo == "hombre") {
            actual.conteoHombres[1] += 1
        } else {
            actual.conteoMujeres[1] += 1
        }

        localStorage.setItem("conteo", JSON.stringify(actual))

    } else if (imcx >= 25 && imcx <= 29.99) {
        tablas.querySelector("#c").setAttribute("class", "verde")
        let actual = JSON.parse(localStorage.getItem("conteo"))
        if (sexo == "hombre") {
            actual.conteoHombres[2] += 1
        } else {
            actual.conteoMujeres[2] += 1
        }

        localStorage.setItem("conteo", JSON.stringify(actual))

    } else if (imcx >= 30 && imcx <= 39.99) {
        tablas.querySelector("#d").setAttribute("class", "naranja")
        let actual = JSON.parse(localStorage.getItem("conteo"))
        if (sexo == "hombre") {
            actual.conteoHombres[3] += 1
        } else {
            actual.conteoMujeres[3] += 1
        }

        localStorage.setItem("conteo", JSON.stringify(actual))

    } else if (imcx >= 40) {
        tablas.querySelector("#e").setAttribute("class", "rojo")
        let actual = JSON.parse(localStorage.getItem("conteo"))
        if (sexo == "hombre") {
            actual.conteoHombres[4] += 1
        } else {
            actual.conteoMujeres[4] += 1
        }

        localStorage.setItem("conteo", JSON.stringify(actual))

    }
    contenedor.innerHTML = ""
    mostrarBarras();

});

function mostrar(imcx, kilos, altura, edad, sexo) {

    let arreglo = JSON.parse(localStorage.getItem("estadistica"))

    if (arreglo == null) {
        let general = {
            hombres: [],
            mujeres: []

        }
        localStorage.setItem('estadistica', JSON.stringify(general))
        arreglo = JSON.parse(localStorage.getItem("estadistica"))

    }

    if (sexo == "hombre") {

        let registro =
        {
            altura: altura,
            kilos: kilos,
            edad: edad,
            sexo: sexo,
            imc: imcx
        }
        let captura = JSON.parse(localStorage.getItem("estadistica"))
        captura.hombres.push(registro)
        localStorage.setItem('estadistica', JSON.stringify(captura))

    } else {

        let registro =
        {
            altura: altura,
            kilos: kilos,
            edad: edad,
            sexo: sexo,
            imc: imcx
        }
        let captura = JSON.parse(localStorage.getItem("estadistica"))
        captura.mujeres.push(registro)
        localStorage.setItem('estadistica', JSON.stringify(captura))


    }
}





