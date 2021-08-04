function doFirst(){
    //先跟畫面產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.strokeStyle = 'blue';
    context.lineWidth = 5;

    context.fillRect(100,100,250,200);
    // context.strokeRect(100,100,250,200);
    context.clearRect(150,150,50,50);

    context.rect(700,400,300,300);
    // context.fill();
    context.stroke();

    // 橡皮擦
    // context.clearRect(0,0,canvas.width,canvas.height);
}
window.addEventListener('load',doFirst);