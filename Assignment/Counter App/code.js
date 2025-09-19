let count = 0;



function add() {
  if (count < 20) {
    count++;
    document.querySelector(".number").innerText = count;
  } else {
    document.querySelector(".number").innerText = "Max limit is 20";
  }
}

function dec() {
  if (count > 0) {
    count--;
    document.querySelector(".number").innerText = count;
  } else {
    document.querySelector(".number").innerText = "Min limit is 0";
  }
}
