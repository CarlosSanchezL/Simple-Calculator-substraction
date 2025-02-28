// Variable global para almacenar el operador actual
let currentOperator = "+";

function changeOperation(op) {
  // Actualizar el operador actual
  currentOperator = op;
  
  // Remover la clase active de todos los botones
  document.getElementById("sum-button").classList.remove("active");
  document.getElementById("subtract-button").classList.remove("active");
  document.getElementById("multiply-button").classList.remove("active");
  document.getElementById("divide-button").classList.remove("active");
  
  // Añadir la clase active al botón seleccionado
  switch(op) {
    case "+":
      document.getElementById("sum-button").classList.add("active");
      break;
    case "-":
      document.getElementById("subtract-button").classList.add("active");
      break;
    case "*":
      document.getElementById("multiply-button").classList.add("active");
      break;
    case "/":
      document.getElementById("divide-button").classList.add("active");
      break;
  }
}

function calculate() {
  // Obtener los valores de los inputs
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  // Verificar si los valores son números válidos
  if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
  }

  // Realizar la operación con el operador actual
  let result;
  switch (currentOperator) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          if (num2 === 0) {
              alert("Cannot divide by zero.");
              return;
          }
          result = num1 / num2;
          break;
      default:
          alert("Invalid operator");
          return;
  }

  // Mostrar el resultado
  document.getElementById("result").innerText = "Result: " + result;
}

function resetFields() {
  // Limpiar los campos de entrada
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result:";
  
  // Restablecer a suma por defecto
  changeOperation("+");
}