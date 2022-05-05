//Hello World and Calculator 

var helloWorld: string = "Hello world!";
console.log(helloWorld);
var x: number;
var y: number;
function compute(x ,y) {
    console.log("addition of "+x+" and "+y+" is " + (x+y));
    console.log("Subtraction of "+x+" and "+y+" is " + (x-y));
    console.log("Multiplication of "+x+" and "+y+" is " + (x*y));
    console.log("division of "+x+" and "+y+" is " + (x/y));
};

compute(4, 2);

// Inheritance

class Car {   
    Color:string     
    constructor(color:string) {   
       this.Color = color  
    }   
 }   
 class Maruti extends Car {   
     Price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.Price = price;  
     }  
     display():void {  
         console.log("Color of Maruti car: " + this.Color);  
         console.log("Price of Maruti car: " + this.Price);  
     }  
 }  
 let obj = new Maruti(" Black", 8500000 );  
 obj.display();  
 

