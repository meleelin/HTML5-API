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


    context.strokeStyle = 'red';
    context.lineWidth = 15;

// lineCap
    context.beginPath();
    context.lineCap='butt';
    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.stroke();

    context.beginPath();
    context.lineCap='round';
    context.moveTo(100, 150);
    context.lineTo(250, 150);
    context.stroke();

    context.beginPath();
    context.lineCap='square';
    context.moveTo(100, 200);
    context.lineTo(250, 200);
    context.stroke();

// lineJoin
    context.lineJoin='miter';
    context.strokeRect(100, 300, 100, 150);

    context.lineJoin='bevel';
    context.strokeRect(250, 300, 100, 150);

    context.lineJoin='round';
    context.strokeRect(400, 300, 100, 150);
    
 
}
window.addEventListener('load',doFirst);