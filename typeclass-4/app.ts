// import {sum friuts,student } from "./utils/index.js";

// import * as SomeModule from "./utils/index.js"


// import Sum from "./utils/index.js"

// console.log(Sum(4,6))
// let add = sum(3,5)

// console.log(add)


// console.log(student)

// console.log(friuts)




// import {arr,userName,obj} from "./utils/index.js";


// console.log(arr,userName,obj)




// interface CarInterface{
//     carName: string;
//     color: string;
//     model: number
// fuelAverage: (fuel:number,milage:number) => void;
// }

// class Car implements CarInterface{
//     name;
//     color;
//     model;
// constructor(carName: string, color: string, model: number){
//     this.name = carName;
//     this.color = color;
//     this.model = model;
// }
// isAutomatic = true;
// fuelAverage(fuel: number, milage: number){
//        let msg = `${this.name} has fuel average of ${milage / fuel}Km`
//        console.log(msg)
// }
// }

// let car1 = new Car('mehran','white',2010)
// car1.fuelAverage(20,400)
// console.log(car1)











// interface CarInterface {
//     name: string;
//     model: number;
//     varient: string;
//     isAutomatic: boolean;
//     calculateAverage: (fuel: number, milage: number) => void;
// }

// class Car implements CarInterface{
//     name;
//     model;
//     varient;
//     constructor(carName: string, model: number, varient: string) {
//         this.name = carName;
//         this.model = model;
//         this.varient = varient;
//     }
//     isAutomatic = true;
//     calculateAverage(fuel: number, milage: number) {
//         let msg = `${this.name} has fuel average of ${milage / fuel} km.`
//         console.log(msg);
//     }
// }
// let car1 = new Car("Mehran", 2005, "VXR");
// car1.calculateAverage(20, 400);
// let car2 = new Car("Haval", 2023, "HEV");
// car2.calculateAverage(10, 150);

// console.log(car1, car2);





// // type Car = {
// //    isAutomatic: boolean,
// //    selfStarts: boolean
// //   vheil?: string
// // }

// interface Vhicle{
//     isAutomatic: boolean,
//     selfStarts: boolean
// }

// interface Car extends Vhicle{
//     airConditioned: boolean
// }




// let car: Car = {
//     isAutomatic: true,
//     selfStarts: true,
//     airConditioned: true,
   
// }


// interface Bike extends Vhicle{
//     isFootrest: boolean
// }


// let bike: Bike = {
//     isAutomatic: false,
//     selfStarts: true,
//     isFootrest: true,
// }


// console.log(car,bike)


// interface Infomation {
//     userName: string,
//     rolNum: number
// }

// let student: Infomation = {
//     userName: 'ali',
//     rolNum: 231
// }





import Sum from "./utils/index.js";


console.log(Sum)


import arr from "./utils/index.js"

console.log(arr)