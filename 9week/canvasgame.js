var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


class Player{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI)
        context.fillStyle = this.color;
        context.fill()
    }    
}
function pppp(){
    console.log("ddd");

    canvas.onmousedown = function(event) {
        context.fillStyle = 'red';
	    context.arc(event.offsetX, event.offsetY, 15, 0, Math.PI*2, true);
	    context.closePath();
        
	    context.fill();
}

}

var p = new Player(100,100,30,'pink');

p.draw();