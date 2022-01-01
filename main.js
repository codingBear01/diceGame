let cwidth = 400;
let cheight = 300;
let dicex = 50;
let dicey = 50;
let dicewidth = 100;
let diceheight = 100;
let dotrad = 6;
let ctx;
let dx;
let dy;
var firstturn = true;
var point;

function throwdice() {
  let sum;
  let ch = 1 + Math.floor(Math.random() * 6);
  sum = ch;
  dx = dicex;
  dy = dicey;
  drawface(ch);

  console.log(sum);

  dx = dicex + 150;
  ch = Math.floor(Math.random() * 6);
  sum += ch;
  drawface(ch);

  console.log(ch);

  if (firstturn) {
    switch (sum) {
      case 7:
      case 11:
        document.f.outcome.value = "You win!";
        break;
      case 2:
      case 3:
      case 12:
        document.f.outcome.value = "You lose!";
        break;
      default:
        point = sum;
        document.f.pv.value = point;
        firstturn = false;
        document.f.stage.value = "Need follow-up throw.";
        document.f.outcome.value = " ";
    }
  } else {
    switch (sum) {
      case point:
        document.f.outcome.value = "You win!";
        document.f.stage.value = "Back to first throw.";
        document.f.pv.value = " ";
        firstturn = true;
        break;
      case 7:
        document.f.outcome.value = "You lose!";
        document.f.stage.value = "Back to first throw.";
        document.f.pv.value = " ";
        firstturn = true;
    }
  }
}

function drawface(n) {
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 5;
  ctx.clearRect(dx, dy, dicewidth, diceheight);
  ctx.strokeRect(dx, dy, dicewidth, diceheight);

  ctx.fillStyle = "#009966";
  switch (n) {
    case 1:
      draw1();
      break;
    case 2:
      draw2();
      break;
    case 3:
      draw2();
      draw1();
      break;
    case 4:
      draw4();
      break;
    case 5:
      draw4();
      draw1();
      break;
    case 6:
      draw4();
      draw2mid();
      break;
  }
}

function draw1() {
  let dotx;
  let doty;
  ctx.beginPath();
  dotx = dx + 0.5 * dicewidth;
  doty = dy + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function draw2() {
  let dotx;
  let doty;
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function draw4() {
  let dotx;
  let doty;
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + diceheight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function draw2mid() {
  let dotx;
  let doty;
  ctx.beginPath();
  dotx = dx + 3 * dotrad;
  doty = dy + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  dotx = dx + dicewidth - 3 * dotrad;
  doty = dy + 0.5 * diceheight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}
