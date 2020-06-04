function setup() {
    createCanvas(2000,1000);
    background (20)
}

function draw() {
    if(mouseX >= 1000 || mouseY >= 1000){
        fill(255,0,0)
    }else{
        fill(0,255,0)
    }
    ellipse(mouseX, mouseY,100,100)
}
