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
 
