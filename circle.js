class circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    
    }
    //getRadius()
    get Radius(){
      return output.radius;
    }
    //setRadius()
    set NewRadius(SetRadius){
      this.radius = SetRadius;
    }
    //getColor()
    get Color(){
      return output.color;
    }
    //setColor()
    set NewColor(SetColor){
      this.color = SetColor;
    }
    //getArea
    get Area(){
      var totalarea = 3.14 *output.radius*output.radius;
      return totalarea.toFixed(2);
    }
    //getArea
    get Circumference(){
      var totalcircum = 2 *3.14* output.radius;
      return totalcircum.toFixed(2);
    }
    
}
 var output = new circle(1.9,"red");
 
 // circle
 console.log(output);
 // circle(radius)
 console.log(output.radius);
 // circle(color)
 console.log(output.radius,output.color);
  //area
 console.log(output.Area)
 //circumference
 console.log(output.Circumference)
 // get radius
 console.log(output.Radius);
 // set radius
 output.NewRadius = 2.5;
 console.log(output.radius);
 // get color
 console.log(output.color);
 // set color
 output.NewColor = "Black";
 console.log(output.color);