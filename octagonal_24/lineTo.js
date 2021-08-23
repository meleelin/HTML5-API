function doFirst() {
    //先跟畫面產生關聯，再建事件聆聽功能
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    let interval = 0;
    let x = 0;
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
    context.strokeStyle = "#353535";
    context.stroke();

    // 斜線
    for (let i = 0; i < 200; i++) {
        x = i * 25;
        context.moveTo(x, 0);
        context.lineTo(0, x);
    }
    context.lineWidth = "2";
    context.strokeStyle = "#353535";
    context.stroke();

    context.beginPath();
    //設定是個頂點的座標,根據頂點制定路徑
    for (var i = 0; i < 12; i++) {
        context.moveTo(
            Math.cos((22.5 / 180) * Math.PI) * (350 - 30 * i) +
                canvas.width / 2,
            -Math.sin((22.5 / 180) * Math.PI) * (350 - 30 * i) +
                canvas.height / 2
        );
        for (var j = 0; j < 9; j++) {
            context.lineTo(
                Math.cos(((22.5 + j * 45) / 180) * Math.PI) * (350 - 30 * i) +
                    canvas.width / 2,
                -Math.sin(((22.5 + j * 45) / 180) * Math.PI) * (350 - 30 * i) +
                    canvas.height / 2
            );
            context.lineTo(
                Math.cos(((45 + j * 45) / 180) * Math.PI) * (180 - 15 * i) +
                    canvas.width / 2,
                -Math.sin(((45 + j * 45) / 180) * Math.PI) * (180 - 15 * i) +
                    canvas.height / 2
            );
        }
    }
    //設定邊框樣式以及填充顏色
    context.lineWidth = "5";
    context.fillStyle = "#6DAFC6";
    context.strokeStyle = "#353535";
    context.fill();
    context.stroke();
}
window.addEventListener("load", doFirst);
