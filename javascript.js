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

  var newHistory = "<div>" + num1 + " " + op + " " + num2 + " " + "=" + " " + valor + "</div>";
  var history = document.getElementById("history");

  history.innerHTML = newHistory + history.innerHTML

  if (history.children.length > 10) {
    history.removeChild(history.childNodes[10])
  }
}