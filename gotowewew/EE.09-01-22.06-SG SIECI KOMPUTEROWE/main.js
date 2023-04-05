const iloscElems = document.querySelectorAll(".ilosc"),
  proElems = document.querySelectorAll(".pro"),
  upButtons = document.querySelectorAll(".up"),
  orButtons = document.querySelectorAll(".or");

check_if();
let order_m = 0;
function check_if() {
  iloscElems.forEach((elem) => {
    if (elem.innerHTML === "0") {
      elem.style.backgroundColor = "Red";
    } else if (elem.innerHTML >= 1 && elem.innerHTML <= 5) {
      elem.style.backgroundColor = "Yellow";
    }
    else if (elem.innerHTML >= 60) {
      elem.style.backgroundColor = "Green"
    }
    else {
      elem.style.backgroundColor = "Honeydew";
    }
  });
}

upButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    let nowaIlosc = window.prompt("Podaj nową ilość");
    iloscElems[index].innerHTML = nowaIlosc;
    check_if();
  });
});

orButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    order_m++;
    window.alert(
      `Zamówienie nr: ${order_m} pro: ${proElems[index].innerHTML}`
    );
  });
});



