function Brick(xBick, yBick, widthBirck, heightBirck, colorBirck, status, distance) {
    this.xBirck = xBick;
    this.yBirck = yBick;
    this.widthBirck = widthBirck;
    this.heightBirck = heightBirck;
    this.colorBirck = colorBirck;
    this.status = false;
    this.distance = distance;

}

let birck = new Brick(25, 25, 70, 25, randomColor(), false, 25);
let arrBick = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        arrBick.push({
            x: birck.xBirck + j * (birck.widthBirck + birck.distance),
            y: birck.yBirck + i * (birck.heightBirck + birck.distance),
            status: false,
        })
    }
}
console.log(arrBick);
function drawBick() {
    arrBick.forEach(function (b) {
        if (!b.status) {
            context.beginPath();
            context.rect(
                b.x,
                b.y,
                birck.widthBirck,
                birck.heightBirck,
            );
            context.fillStyle = randomColor();
            context.fill();
            context.closePath();
        }
    })
}
function ballCollisionBirck(ball) {
    arrBick.forEach(function (b) {
        if (!b.status) {
            if (ball.xBall >= b.xBirck
                && ball.xBall <= b.xBirck + birck.widthBirck
                && ball.yBall + ball.radius >= birck.yBirck
                && ball.yBall - ball.radius <= b.yBirck + birck.heightBirck) {
                ball.point += 1;
                console.log(ball.point);
                if (ball.point >= 15) {
                    ball.level++;
                    console.log(ball.level);
                }else {
                    ball.ySpeedBall = -ball.ySpeedBall;
                    b.status = false;
                }
            }
        }
    });
}