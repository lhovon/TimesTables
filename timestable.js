var radius = 275;

function timesTable(points, table) {
    this.points = points;
    this.table = table;
    this.angle = 2*PI/points;
    this.x;
    this.y;
    
   for (var i=0; i < points; i++) {
       this.x = Math.cos(i*angle) * radius;
       this.y = Math.sin(i*angle) * radius;
       var x2 = Math.cos(table*i*angle) * radius;
       var y2 = Math.sin(table*i*angle) * radius;
       
       line(x, y, x2, y2);
    }
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight-150);
    background(0);
    
    translate(width/2, height/2);
    noFill();
}

function draw() {
    background(0);
    translate(width/2, height/2);
    noFill();
    stroke(255, 255, 255);
    //ellipse(0, 0, 2*radius, 2*radius);
    
    var points = document.getElementById("points").value;
    var table = document.getElementById("table").value;
    
    document.getElementById("points_value").innerHTML = points;
    document.getElementById("table_value").innerHTML = table;
    
    timesTable(points, table);
}