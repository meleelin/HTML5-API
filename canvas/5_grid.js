function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

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
    
    
    

}
window.addEventListener('load',doFirst);