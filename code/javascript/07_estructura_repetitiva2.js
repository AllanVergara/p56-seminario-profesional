var contador = 0

const avanzar = () => Math.random() < 0.5

do {
    contador++
} while (avanzar())

if (contador == 1) {
    console.log(`Se avanzo ${contador} vez.`)
} else {
    console.log(`Se avanzo ${contador} veces.`)
}