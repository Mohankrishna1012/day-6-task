class Uber{
    constructor(basicPay, distanceCovered, PerKm) {
        this.basicPay = basicPay;
        this.distanceCovered = distanceCovered;
        this.PerKm = PerKm;
    }
    get UberPrice(){
      var totalPrice = calculator.basicPay + (calculator.distanceCovered * calculator.PerKm) 
      return totalPrice;
      }
    
    
}
const calculator = new Uber(50,5,70);
console.log(calculator.UberPrice)