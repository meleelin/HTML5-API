function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.font='bold 50px Tahoma';
    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    // 第一個字
    context.strokeText('omgSilvia', 100, 100);

    context.moveTo(100, 100);
    context.lineTo(350, 100);
    context.stroke();
    
    // 第二個字
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 3;
    context.shadowColor = 'rgba(255,0,0,0.5)';
    context.shadowBlur = 5;
    
    context.fillStyle = '#fff';
    context.fillText('omgSilvia', 100, 200);
    
    // 第三個字
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowColor = 'red';
    context.shadowBlur = 10;
    context.fillText('omgSilvia', 100, 300);
    
    // 第四個字
    context.fillText('omgSilvia', 100, 400);

    context.shadowColor = 'blue';
    context.fillText('omgSilvia', 100, 400);
    
}
window.addEventListener('load',doFirst);