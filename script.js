window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();

  elemekFormazasa1();

  esemenyKezeles1();
 
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("section h2")[0];
  let tartalom = ELEM.innerHTML;
  console.log(tartalom);
}
function elemekElerese2() {
  const ELEM = document.getElementById("ide");
  ELEM.innerHTML = "Jó reggelt";
}
function elemekElerese3() {
  const ELEM = document.querySelectorAll(".ide")[0];
  ELEM.innerHTML = "Jó reggelt";
}
function elemekElerese4() {
  const ELEM = document.getElementsByClassName("lista")[0];
  let text = "<ul>";
  for (let i = 0; i < 5; i++) {
    let szam = Math.floor(Math.random() * 21 + 10);
    text += `<li>${szam}</li>`;
  }
  text += "</ul>";
  ELEM.innerHTML = text;
}

function elemekFormazasa1() {
  const ELEM = document.getElementsByClassName("lista")[0];
  ELEM.classList.add("formazott");
  ELEM.innerHTML;
}

function esemenyKezeles1() {
  let elem1 = document.querySelectorAll(".lista")[0];

  elem1.addEventListener("click", fvenynev);
}

function fvenynev() {
  let elem1 = document.querySelectorAll(".lista")[0];  
  let kattintasutanElem = document.querySelectorAll(".kattintasutan")[0];
  kattintasutanElem.appendChild(elem1);
}
