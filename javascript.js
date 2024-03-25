function soma(op) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var valor = 0;

  switch (op) {
    case '+': valor = num1 + num2; break;
    case '-': valor = num1 - num2; break;
    case '*': valor = num1 * num2; break;
    case '/': valor = num1 / num2; break;
  }

  document.getElementById("output").value = valor;
}