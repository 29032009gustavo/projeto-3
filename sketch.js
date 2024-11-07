let palavra
function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
} 

function palavraAleatoria(){
  let palavras = ["Riqueza", "Iiberdade", "Carros"];
  palavra = random(palavras);
  return random(palavras);
}

function inicializaCores(){
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

  function palavraParcial(minimo, maximo){
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
   return parcial
  }

function draw() {
  inicializaCores();
 let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
 /* if (mouseX < 50){
    let palavra = "D"
    text(palavra, 200, 200);
  }if (mouseX < 100){
    let palavra = "Di"
    text(palavra, 200, 200);
  }if (mouseX < 150){
    let palavra = "Din"
    text(palavra, 200, 200);
  }if (mouseX < 200){
    let palavra = "Dinh"
    text(palavra, 200, 200);
  }if (mouseX < 250){
    let palavra = "Dinhe"
    text(palavra, 200, 200);
  }if (mouseX < 300){
    let palavra = "Dinhei"
    text(palavra, 200, 200);
  }if (mouseX < 350){
    let palavra = "Dinheir"
    text(palavra, 400, 200);
  }if (mouseX < 50){
    let palavra = "Dinheiro"
    text(palavra, 200, 200);
  }*/
}
