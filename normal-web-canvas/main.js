const canvas = document.getElementById("graphics");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isClicked = false;
let lineWidth = 10;
let temp = false;

document.addEventListener("mousedown", (event) => {
  if (event.button == 0 && !isClicked) {
    isClicked = true;

    if (!temp) {
      temp = [event.clientX, event.clientY];
    } else {
      temp = [event.clientX, event.clientY];
    }
  }

  console.log(isClicked);
});

document.addEventListener("mouseup", (event) => {
  if (event.button == 0 && isClicked) {
    isClicked = false;
  }

  console.log(isClicked);
});

document.addEventListener("mousemove", (event) => {
  if (isClicked) {
    ctx.beginPath();
    ctx.moveTo(temp[0], temp[1]);
    ctx.lineTo(event.clientX, event.clientY);
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    temp = [event.clientX, event.clientY];
  }
});

document.addEventListener("wheel", (event) => {
  console.log(event);
  console.log(lineWidth);
  if (event.deltaY > 0 && lineWidth > 1) {
    lineWidth--;
  } else if (event.deltaY < 0 && lineWidth < 10) {
    lineWidth++;
  }
});
