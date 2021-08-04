function doFirst() {
  let canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // 格線開始
  let interval = 0;
  for (let i = 0; i < 100; i++) {
    interval = i * 50;

    // 水平線
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    // context.fillText(interval, 0, interval);

    // 垂直線
    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    // context.fillText(interval, interval, 10);
  }
  context.strokeStyle = "rgba(0,0,0,0.3)";
  // context.stroke();
  // 格線結束

  pic1 = new Image();
  // pic1.src = `https://loremflickr.com/${canvas.width}/${canvas.height}`;
  pic1.src = "../images/bg/cityscape.jpg";
  pic1.addEventListener("load", loadImage);

  pic2 = new Image();
  pic2.src = "../images/Shinnosuke/Shinnosuke9.png";
  pic2.addEventListener("load", loadImage);
}
function loadImage() {
  context.globalAlpha = 0.3;
  context.drawImage(pic1, 0, 0, canvas.width, canvas.height);

  context.globalAlpha = 1;
  // context.drawImage(pic2, (canvas.width - 704) / 2, (canvas.height - 700) / 2);
  context.drawImage(pic2, 700, 400, 300, 300);
}
window.addEventListener("load", doFirst);
