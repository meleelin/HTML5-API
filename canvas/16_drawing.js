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
    
    canvas.addEventListener('mousemove',usePen)
}
function usePen(e){
    context.fillStyle='red';
    context.strokeStyle='red';

    // context.strokeRect(e.pageX, e.pageY, 5, 5);
    
    context.beginPath();
    context.arc(e.pageX, e.pageY, 5, 0, 2 * Math.PI);
    context.fill();
}
window.addEventListener('load',doFirst);