document.getElementById("somar").addEventListener("click", function () {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resposta = document.getElementById("resposta");
  resposta.innerHTML = num1 + num2;
});
function colors(color) {
  document.body.style.backgroundColor = color;
}
document.getElementById("azul").addEventListener("click", function () {
  colors("blue");
});

document.getElementById("amarelo").addEventListener("click", function () {
  colors("yellow");
});

document.getElementById("vermelho").addEventListener("click", function () {
  colors("red");
});

document.getElementById("verde").addEventListener("click", function () {
  colors("green");
});

document.getElementById("preto").addEventListener("mouseover", function () {
  colors("black");
});

document.getElementById("preto").addEventListener("mouseleave", function () {
  document.body.style.backgroundColor = "white";
});

document.getElementById("azulLink").addEventListener("mouseover", function () {
  colors("blue");
});

document.getElementById("azulLink").addEventListener("mouseleave", function () {
  document.body.style.backgroundColor = "white";
});

document
  .getElementById("vermelhoLink")
  .addEventListener("mouseover", function () {
    colors("red");
  });

document
  .getElementById("vermelhoLink")
  .addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "white";
  });

document
  .getElementById("amareloLink")
  .addEventListener("mouseover", function () {
    colors("yellow");
  });

document
  .getElementById("amareloLink")
  .addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "white";
  });

document
  .getElementById("marromLink")
  .addEventListener("mouseover", function () {
    colors("brown");
  });

document
  .getElementById("marromLink")
  .addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "white";
  });

document.getElementById("colors").addEventListener("change", function () {
  colors(this.value);
});

document.getElementById("button").addEventListener("click", function () {
  if (document.getElementById("demo").innerHTML === "") {
    document.getElementById("demo").innerHTML = "Hello World!";
  } else if (document.getElementById("demo").innerHTML === "Hello World!") {
    document.getElementById("demo").innerHTML = "";
  }
});

document.getElementById("verificarBtn").addEventListener("click", function () {
  var numToCheck = parseInt(document.getElementById("verificar").value);
  if (numToCheck % 5 === 0 && numToCheck % 3 === 0) {
    alert("Divisível por 5 e 3");
  } else {
    alert("Não divisível por 5 e 3");
  }
});
