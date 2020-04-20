function Paddle(xPaddle,yPaddle,widthPaddle,heightPaddle,colorPaddle,
                speedPaddle,isMovingLeft,isMovingRight) {
            this.xPaddle=xPaddle;
            this.yPaddle=yPaddle;
            this.widthPaddle=widthPaddle;
            this.heightPaddle=heightPaddle;
            this.speedPaddle=speedPaddle;
            this.isMovingLeft=isMovingLeft;
            this.isMovingRight=isMovingRight;
            this.colorPaddle=colorPaddle;

    // vẽ ra thanh đỡ
    this.drawPaddle=function () {
        context.beginPath();
        context.rect(paddle.xPaddle, paddle.yPaddle, paddle.widthPaddle, paddle.heightPaddle);
        context.fillStyle = this.colorPaddle;
        context.fill();
        context.closePath();
    };
    // sử lý sự kiện
    this.checkKeyUp=function(){
        let self = this;
       document.addEventListener('keyup', function (event) {
           // console.log(event);
            if (event.keyCode == 37) {
                self.isMovingLeft = false;
                //console.log("sang trái"+isMovingRight)
            } else if (event.keyCode == 39) {
                self.isMovingRight = false;
                //console.log("sang phai"+isMovingRight)
            }
        });
    };

    this.checkKeyDown=function(){
        let self = this;
        document.addEventListener('keydown', function (event) {
            // console.log(event);
            if (event.keyCode == 37) {
                self.isMovingLeft = true;
                //console.log("sang trái"+isMovingRight)
            } else if (event.keyCode == 39) {
                self.isMovingRight = true;
                //console.log("sang phai"+isMovingRight)
            }
        });
    };
    // tạo sự di chuyển
        this.moveToPaddle=function () {
            if (this.isMovingLeft) {
                console.log('left');

                this.xPaddle -= this.speedPaddle;
            } else if (this.isMovingRight) {
                console.log('right');

                this.xPaddle += this.speedPaddle;
            }
            if (this.xPaddle < 0) {
                this.xPaddle = 0;
            } else if (this.xPaddle > canvas.width - this.widthPaddle) {
                this.xPaddle = canvas.width - this.widthPaddle;
            }
        };

    this.checkKeyUp();
    this.checkKeyDown();
}
let paddle=new Paddle(500/2,500-20, 70,20,"blue",
    15,false,false,);