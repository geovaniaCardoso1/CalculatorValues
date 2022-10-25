var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var calcular = document.querySelector('#btn-calc')

function somar() {
  document.querySelector('#result').value =
    parseInt(num1.value) + parseInt(num2.value)
}

function subtrair() {
  document.querySelector('#result').value =
    parseInt(num1.value) - parseInt(num2.value)
}

function multiplicar() {
  document.querySelector('#result').value =
    parseInt(num1.value) * parseInt(num2.value)
}

function dividir() {
  if (parseInt(num2.value) === 0) {
    document.querySelector('#result').value = 'não é possivel dividir por 0!'
    return
  }
  document.querySelector('#result').value =
    parseInt(num1.value) / parseInt(num2.value)
}

function clicar() {
  var num1 = document.querySelector('#num1').value
  var num2 = document.querySelector('#num2').value
  var operacao = document.querySelector('input[name="radio"]:checked').value

  console.log(operacao)

  switch (operacao) {
    case 'Soma':
      somar()
      break

    case 'Subtrair':
      subtrair()
      break

    case 'Multiplica':
      multiplicar()
      break

    case 'Dividir':
      dividir()
      break
  }
}
