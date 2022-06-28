const entradaNumero = document.querySelector('#entrada-numero')
const btn = document.querySelector('#btn')
const resultadoLongitud = document.querySelector('#resultado-longitud')
const resultadoVolumen = document.querySelector('#resultado-volumen')
const resultadoPeso = document.querySelector('#resultado-peso')

btn.addEventListener('click', convertirMedidas)

function convertirMedidas() {
  const numero = entradaNumero.value
  resultadoLongitud.textContent = `
    ${numero} metros = ${(numero * 3.281).toFixed(3)} feet | ${numero} feet = ${(numero / 3.281).toFixed(3)} metros
  `
  resultadoVolumen.textContent = `
    ${numero} litros = ${(numero * 0.264).toFixed(3)} gallons | ${numero} gallons = ${(numero / 0.264).toFixed(3)} litros
  `
  resultadoPeso.textContent = `
    ${numero} kilos = ${(numero * 2.204).toFixed(3)} pounds | ${numero} pounds = ${(numero / 2.204).toFixed(3)} kilos
  `  
  entradaNumero.value = ''
}