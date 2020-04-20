let canvas = document.getElementById("myCanvas");
let context = canvas.getContext('2d');
let checkGame=false;

function random() {
    return Math.floor(Math.random() * 255);
}
function randomColor() {
    let red = random();
    let blue = random();
    let green = random();
    return "rgb(" + red + "," + blue + "," + green + ")";
}


// tạo 1 hàm vẽ toàn bộ mọi thứ
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball. drawBall();

    paddle.drawPaddle();
    paddle.moveToPaddle();

     drawBick();
    ballCollisionBirck(ball);

    // ball.ballCollisionBirck(birck);
    ball.ballCollisionPaddle(paddle);

    ball.ballCollision();

    requestAnimationFrame(draw);// đệ quy
}
function star() {
    draw();
}
// setInterval(function () {
//     draw();
// },100);
