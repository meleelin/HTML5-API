function doFirst() {
    let canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // 格線開始
    context.beginPath();

    let interval = 0;
    for (let i = 0; i < 100; i++) {
        interval = i * 50;

        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.stroke();
    // 格線結束

    // 四分之一開始
    context.beginPath();

    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle = "rgba(0,0,0,1)";
    context.stroke();
    // 四分之一結束

    context.strokeStyle = "red";
    context.lineWidth = 5;

    //左上角
    context.beginPath();

    context.moveTo(100, 250);
    context.bezierCurveTo(200, 100, 275, 75, 350, 300);
    context.bezierCurveTo(150, 100, 250, 450, 350, 300);
    context.stroke();

    context.strokeStyle = "blue";
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(100, 250);
    // context.lineTo(200, 100);
    // context.lineTo(275, 75);
    context.lineTo(150, 100);
    context.lineTo(250, 450);

    context.lineTo(350, 300);
    context.stroke();

    context.fillText("(100 , 250)", 80, 260);
    // context.fillText('(200 , 100)', 200, 100);
    // context.fillText('(275 ,  75)', 275,  75);
    context.fillText("(350 , 300)", 325, 310);

    //右上角
    context.beginPath();
    context.arc(750, 175, 150, 0, Math.PI, false);
    // context.stroke();

    //左下角
    context.beginPath();
    context.arc(250, 525, 150, 0, 2 * Math.PI);
    // context.stroke();

    //右下角
    context.beginPath();
    context.arc(750, 525, 150, 0.3 * Math.PI, 1.6 * Math.PI);
    // context.stroke();
}
window.addEventListener("load", doFirst);
