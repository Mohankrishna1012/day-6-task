class circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    //toString
    this.toString = function () {
      return `radius = ${this.radius}, color = ${this.color}`;
    };
    }
}
 var output = new circle(1.9,"red");
// toString
 console.log(output.toString());