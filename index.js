// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const annNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(annNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

function moveDodgerRight() {
   const annNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(annNumbers, 10);
  
   if (left > 0) {
     dodger.style.left = `${left + 1}px`;
   }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  };
  if (e.key === "ArrowRight") {
    moveDodgerRight();
   };
});


