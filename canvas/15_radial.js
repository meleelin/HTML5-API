function doFirst(){
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

// 格線開始
    context.beginPath();

    let interval = 0;
    for(let i = 0; i < 100; i++){
        interval = i * 50;

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        
        // 垂直線
        context.moveTo(interval,             0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();
// 格線結束
    let gradient = context.createRadialGradient(350, 250, 80, 290, 250, 150);
    // 請移到 9_arcMore.js 繼續放射狀漸層
    gradient.addColorStop(  0, 'red');
    gradient.addColorStop(  1, 'blue');
    // gradient.addColorStop(0.5, 'yellow');

    // context.fillStyle='yellow';
    context.fillStyle = gradient;
    context.fillRect(100, 100, 500 ,300);
}
window.addEventListener('load',doFirst);