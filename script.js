let clickCount = 0;
let timer;
const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const modal = document.getElementById("timerModal");
const modalClickCount = document.getElementById("modalClickCount");
const closeBtn = document.querySelector(".close-button");

clickButton.addEventListener("click", () => {
  clickCount++;
  counter.textContent = clickCount;
});

resetButton.addEventListener("click", () => {
  clickCount = 0;
  counter.textContent = clickCount;
});

clickButton.addEventListener("click", () => {
  startTimer();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  clickCount = 0;
  counter.textContent = clickCount;
});

function startTimer() {
  timer = setTimeout(() => {
    showModal();
  }, 10000); // 10 seconds
}

function showModal() {
  modal.style.display = "block";
  modalClickCount.textContent = clickCount;
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
