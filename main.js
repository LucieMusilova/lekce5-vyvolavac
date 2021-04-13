
let jmena = [
  "Markéta",
  "Kateřina",
  "Júlia",
  "Lucie",
  "Aneta",
  "Veronika",
  "Petra",
  "Olga",
  "Naďa",
  "Nikola",
  "Eva",
  "Anísa",
  "Terezia",
  "Diana",
  "Anna",
  "Iva",
  "Denisa",
  "Zuzana",
  "Jana",
  "Martina",
  "Lenka",
  "Iveta",
  "Pavla",
  "Lucie",
  "Kamila",
  "Soňa"
];


let tazenaJmena = [];

function tahnoutJmeno() {
  if (jmena.length === 0) {
      return;
  }

  // Generujeme náhodný index

  let vyherniIndex = Math.floor(Math.random() * jmena.length);
  console.log(vyherniIndex);

  // Získáme výherní jméno na patřičném indexu

  let vyherniJmeno = jmena[vyherniIndex];
  console.log(vyherniJmeno);

  // Vyřadíme vylosované jméno z osudí

  jmena.splice(vyherniIndex, 1);
  console.log(jmena.length);

  // Výherní jméno si uložíme do pole k ostatním výherním

  tazenaJmena.unshift(vyherniJmeno);

  // Počet výherkyň
  
  let pocet = document.querySelector("#pocet");
  pocet.innerHTML = parseInt(pocet.innerHTML) + 1;
    
  
  


  let vyherce = document.querySelector("#vyherka");
  vyherce.innerHTML = vyherniJmeno;

  let seznamJmen = document.querySelector("#seznam");
  seznamJmen.innerHTML = tazenaJmena;
}

// reset hry

function reset() {
  location.reload();
}