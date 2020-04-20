function Brick(xBick,yBick,widthBirck,heightBirck,colorBirck,status,distance) {
    this.xBirck=xBick;
    this.yBirck=yBick;
    this.widthBirck=widthBirck;
    this.heightBirck=heightBirck;
    this.colorBirck=colorBirck;
    this.status=false;
    this.distance=distance;

    // tạo ra birck.
    this.birck=function () {
        this. arrBirck=[];
        for (let i=0;i<5;i++){
            for (let j=0;j<5;j++){
               this. arrBirck.push({
                    x:xBick+j*(widthBirck+this.distance),
                    y:yBick+i*(heightBirck+this.distance),
                   status:true,
                })
            }
        }
    };
    this.drawBirck=function () {
        let color=this;
        this.arrBirck.forEach(function (b) {
            if (b.status){
                context.beginPath();
                context.rect(b.x,b.y,widthBirck,heightBirck);
                context.fillStyle=color.colorBirck;
                context.fill();
                context.closePath();
            }

        });
    };
   this. birck();
}
let birck=new Brick(25,25,70,25, randomColor(),false,25);
console.log(birck);