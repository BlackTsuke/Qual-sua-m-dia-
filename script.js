var nota1 = parseFloat(prompt("Qual sua primeira nota?"))
var nota2 = parseFloat(prompt("Qual sua segunda nota?"))
var nota3 = parseFloat(prompt("Qual sua terceira nota?"))
var media = nota1 + nota2 + nota3

media = media / 3

alert("Estou analisando sua média, espere um momento...")
alert("Sua média é: " + media)

if (media >= 5){
  alert("Você passou parabéns.")
}
else if (media >= 1){
  alert("Você ficou de recuperação")
  alert("Estude um pouco mais.")
}
else{
  alert("Você perdeu de ano")
  alert("Tente de novo ano que vêm.")
}