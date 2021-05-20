const progress = document.getElementById("progress");
const prev = document.getElementById("Prev");
const next = document.getElementById("Next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

const update = () => {
  circles.forEach((cir, idx) => {
    if (idx < currentActive) {
      cir.classList.add("active");
    } else {
      cir.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
