function Ball(radius, colorBall, xBall, yBall, xSpeedBall, ySpeedBall, statusBall, point, level) {
    this.radius = radius;
    this.colorBall = colorBall;
    this.xBall = xBall;
    this.yBall = yBall;
    this.xSpeedBall = xSpeedBall;
    this.ySpeedBall = ySpeedBall;
    this.point = point;
    this.level = level;
    this.statusBall = false;

    // tạo phương thức di chuyển
    this.moveTo = function () {
        this.xBall += this.xSpeedBall;
        this.yBall += this.ySpeedBall;
    };
    // tạo va chạm biên của ball trái -phải và trên
    this.ballCollision = function () {
        if (this.xBall < this.radius || this.xBall > canvas.width - this.radius) {
            this.xSpeedBall = -this.xSpeedBall;
        } else if (this.yBall < this.radius || this.yBall > canvas.height - this.radius) {
            this.ySpeedBall = -this.ySpeedBall;
        }
    };
    // xử lý va chạm vào thanh đỡ
    this.ballCollisionPaddle = function (paddle) {
        if (this.xBall + this.radius >= paddle.xPaddle
            && this.xBall + this.radius <= paddle.xPaddle + paddle.widthPaddle
            && this.yBall + this.radius >= canvas.height - paddle.heightPaddle) {
            this.ySpeedBall = -this.ySpeedBall;
        }
    };

    //va chạm vào vật phẩm( brick)
    this.ballCollisionBirck = function (birck) {
        if (!birck.status) {
            if (this.xBall >= birck.xBirck
                && this.xBall <= birck.xBirck + birck.widthBirck
                && this.yBall + this.radius >= birck.yBirck
                && this.yBall - this.radius <= birck.yBirck + birck.heightBirck) {
                this.point += 1;
                if (this.point >= 15) {
                    this.level++;
                }
                this.ySpeedBall = -this.ySpeedBall;
                birck.status = false;

            }
        }
    };
    this.drawBall=function () {
        this.moveTo();
        context.beginPath();
        context.arc(this.xBall, this.yBall, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.colorBall;
        context.fill();
        context.stroke();
        context.closePath();
    }
}
let ball=new Ball(20, randomColor(),
    220,220,
    5,2,false,0,1);
console.log(ball);

