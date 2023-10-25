function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw the edge circle with gradient
  ctx.fillStyle = "white";
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius * 1.05);
  grad.addColorStop(0, 'black');   // Color interior (negro)
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, 'black');


  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.12;
  ctx.stroke();

  // Centro del reloj
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  //TODO: Make sure you show all the numbers
  var ang;
  var num = 1;
 
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ang = (num * Math.PI) / 6;

  for (num = 1; num <= 12; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
}

}

function drawTime(ctx, radius) {
  // TODO: Calculate the angles of every hand depending on the time
  var secondAngle = getSeconds();
  var minuteAngle = getMinutes();
  var hourAngle = getHours();

  drawHand(ctx, hourAngle, radius * 0.5, radius * 0.06); // Manecilla de las horas
  drawHand(ctx, minuteAngle, radius * 0.8, radius * 0.06); // Manecilla de los minutos
  drawHand(ctx, secondAngle, radius * 0.9, radius * 0.02); // Manecilla de los segundos
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function getSeconds() {
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsAngle = (seconds / 60) * 2 * Math.PI - Math.PI / 2; 
  return secondsAngle;
}

function getMinutes() {
  var now = new Date();
  var minutes = now.getMinutes();
  var minutesAngle = (minutes / 60) * 2 * Math.PI - Math.PI / 2; // Ángulo en radianes
  return minutesAngle;
}

function getHours() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var hoursAngle = ((hours % 12 + minutes / 60) / 12) * 2 * Math.PI - Math.PI / 2; // Ángulo en radianes
  return hoursAngle;
}