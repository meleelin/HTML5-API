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

    // 左上角
    context.beginPath();
    context.arc(250, 175, 150, 0, 2*Math.PI, false);
    context.moveTo(400, 525);
    context.arc(250, 525, 150, 0, 2*Math.PI, false);
    context.moveTo(900, 175);
    context.arc(750, 175, 150, 0, 2*Math.PI, false);
    context.moveTo(900, 525);
    context.arc(750, 525, 150, 0, 2*Math.PI, false);
    context.fillStyle = "#FFFFFF";
    context.strokeStyle = "#000000";
    context.lineWidth = 8;
    context.fill();
    context.stroke();

    // pink left
    context.beginPath();
    context.moveTo(150, 175);
    context.arc(140, 175, 30, 0, 2*Math.PI, false);
    context.moveTo(350, 175);
    context.arc(360, 175, 30, 0, 2*Math.PI, false);
    context.fillStyle = "#FAC2C5";
    context.fill();

    context.beginPath();
    context.lineCap='round';
    // eye left
    context.moveTo(180, 100);
    context.lineTo(225, 140);
    context.moveTo(175, 135);
    context.lineTo(225, 140);
    context.moveTo(175, 170);
    context.lineTo(225, 140);
    // eye right
    context.moveTo(320, 100);
    context.lineTo(275, 140);
    context.moveTo(325, 135);
    context.lineTo(275, 140);
    context.moveTo(325, 170);
    context.lineTo(275, 140);
    // nose
    context.moveTo(230, 175);
    context.bezierCurveTo(245,150,255,150,270,175);
    //mouth
    context.moveTo(140, 175);
    context.bezierCurveTo(210,215,290,215,360,175);

    context.stroke();
    
    // 左下角

    // 陰影
    context.beginPath();
    context.moveTo(175,585);
    context.quadraticCurveTo(180,550, 250, 555);
    context.lineTo(250, 575);
    context.quadraticCurveTo(180,600, 175, 585);
    context.moveTo(325,585);
    context.quadraticCurveTo(320,550, 250, 555);
    context.lineTo(250, 575);
    context.quadraticCurveTo(320,600, 325, 585);
    context.ellipse(250, 632, 15, 5, 0, 0, 2 * Math.PI);
    context.fillStyle = "#CCCBCB";
    context.fill();

    // eyebrow
    context.beginPath();
    context.lineCap='round';
    context.moveTo(185, 530);
    context.bezierCurveTo(200,530,220,525,230,512);
    context.moveTo(315, 530);
    context.bezierCurveTo(300,530,280,525,270,512);

    // eye left
    context.moveTo(180, 550);
    context.bezierCurveTo(180,550,230,550,231,550);
    context.moveTo(180, 555);
    context.bezierCurveTo(180,555,230,555,230,555);
    context.moveTo(181, 560);
    context.bezierCurveTo(180,560,230,560,231,560);
    context.moveTo(182, 565);
    context.bezierCurveTo(180,565,230,565,231,565);
    context.moveTo(182, 570);
    context.bezierCurveTo(180,570,230,570,230,568);

    // eye right
    context.moveTo(318, 549);
    context.bezierCurveTo(320,550,270,550,270,550);
    context.moveTo(320, 553);
    context.bezierCurveTo(320,555,270,555,270,555);
    context.moveTo(320, 560);
    context.bezierCurveTo(320,560,270,560,270,560);
    context.moveTo(320, 565);
    context.bezierCurveTo(320,565,270,565,270,565);
    context.moveTo(320, 570);
    context.bezierCurveTo(320,570,270,570,270,568);

    // nose
    context.moveTo(230, 590);
    context.bezierCurveTo(245,575,255,575,270,590);

    // mouth
    context.moveTo(215, 625);
    context.bezierCurveTo(245,610,255,610,285,625);
    context.stroke();
    
    // 右下角
    // eye left
    context.moveTo(680, 440);
    context.lineTo(725, 480);
    context.moveTo(680, 480);
    context.lineTo(725, 480);
    context.moveTo(680, 510);
    context.lineTo(725, 480);

    // eye right
    context.moveTo(820, 440);
    context.lineTo(775, 480);
    context.moveTo(820, 480);
    context.lineTo(775, 480);
    context.moveTo(820, 510);
    context.lineTo(775, 480);

    // nose
    context.moveTo(727, 510);
    context.bezierCurveTo(745, 490, 755, 490, 770, 510);
    context.stroke();
    
    
    // mouth red
    context.beginPath();
    context.moveTo(655, 548);
    context.bezierCurveTo(670, 670, 830, 670, 845, 548);
    context.fillStyle = "#C33830";
    context.fill();

     // mouth pink
     context.beginPath();
     context.moveTo(675, 605);
     context.bezierCurveTo(690, 570, 800, 570, 825, 605);
     context.moveTo(825, 605);
     context.bezierCurveTo(795,650,705,650,675,605);
     context.fillStyle = "#F39089";
     context.fill();

    // mouth
    context.beginPath();
    context.moveTo(650, 530);
    context.lineTo(850, 530);
    context.moveTo(650, 530);
    context.bezierCurveTo(670,675,830,675,850,530);
    context.stroke();

    // 右上角
    // red
    context.beginPath();
    context.moveTo(900, 175);
    context.arc(750, 175, 150, 0, 2*Math.PI, false);
    context.fillStyle = "#E23126";
    context.strokeStyle = "#000000";
    context.lineWidth = 8;
    context.fill();
    context.stroke();

    // red2
    context.beginPath();
    context.moveTo(604, 175);
    context.bezierCurveTo(650,10,850,10,896,175);
    context.moveTo(900, 175);
    context.arc(750, 175, 146, 0, Math.PI, false);
    context.fillStyle = "#B72117";
    context.fill();

    context.beginPath();
    context.lineWidth = 8;

    // eyebrow
    context.moveTo(710, 75)
    context.lineTo(735, 130)
    context.moveTo(790, 75)
    context.lineTo(765, 130)

    context.moveTo(745, 85)
    context.lineTo(740, 120)
    context.moveTo(758, 85)
    context.lineTo(760, 120)

    // nose
    context.moveTo(727, 165);
    context.bezierCurveTo(740, 140, 757, 143, 773, 165);
    context.stroke();

    // wrinkle
    context.moveTo(731, 143)
    context.lineTo(692, 175)
    context.moveTo(769, 143)
    context.lineTo(808, 175)

    // mouth wrinkle
    context.moveTo(650, 222)
    context.bezierCurveTo(645, 230, 650, 238, 661, 238);
    context.moveTo(850, 222)
    context.bezierCurveTo(855, 230, 850, 238, 839, 238);
    context.moveTo(727, 232)
    context.bezierCurveTo(750, 227, 760, 228, 780, 233);
    context.stroke();

    // mouth
    context.beginPath();
    context.moveTo(663, 225);
    context.bezierCurveTo(739, 163, 763, 168, 837, 225);
    context.moveTo(837, 225);
    context.bezierCurveTo(780, 205, 790, 209, 750, 210);
    context.bezierCurveTo(708, 209, 689, 209, 663, 225);
    context.moveTo(697, 200);
    context.lineTo(702, 210);
    context.moveTo(718, 193);
    context.lineTo(721, 210);
    context.moveTo(750, 183);
    context.lineTo(751, 210);
    context.moveTo(783, 193);
    context.lineTo(779, 206);
    context.moveTo(809, 206);
    context.lineTo(805, 208);
    context.fillStyle = "#ffffff";
    context.fill();
    context.stroke();
    
    // eye
    context.beginPath();
    context.moveTo(668, 120);
    context.bezierCurveTo(700, 80, 720, 90, 735, 130);
    context.bezierCurveTo(715, 140, 695, 155, 668, 120);
    context.moveTo(765, 130);
    context.bezierCurveTo(780, 90, 800, 80, 832, 120);
    context.bezierCurveTo(805, 155, 785, 140, 765, 130);
    context.fillStyle = "#F5EA37";
    context.fill();
    context.stroke();

}
window.addEventListener("load", doFirst);
