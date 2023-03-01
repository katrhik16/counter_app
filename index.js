let counter_number = document.getElementById("counter_number");
let subtract_btn = document.getElementById("Sub_Count");
let add_btn = document.getElementById("Add_Count");
add_btn.onclick = () => {
  counter_number.innerHTML = Number(counter_number.innerHTML) + 1;
};
subtract_btn.onclick = () => {
  counter_number.innerHTML = Number(counter_number.innerHTML) - 1;
};

const toggleButton = document.getElementById("toggle-button");
const status = document.getElementById("status");
let isOccupied = false;

toggleButton.addEventListener("click", function () {
  if (isOccupied) {
    status.innerText = "Vacant";
    status.style.color = "green";
    isOccupied = false;
  } else {
    status.innerText = "Occupied";
    status.style.color = "red";
    isOccupied = true;
  }
});

