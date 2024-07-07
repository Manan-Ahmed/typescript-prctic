"use strict";
// import {sum friuts,student } from "./utils/index.js";
class Car {
    name;
    color;
    model;
    constructor(carName, color, model) {
        this.name = carName;
        this.color = color;
        this.model = model;
    }
    isAutomatic = true;
    fuelAverage(fuel, milage) {
        let msg = `${this.name} has fuel average of ${milage / fuel}Km`;
        console.log(msg);
    }
}
let car1 = new Car('mehran', 'white', 2010);
car1.fuelAverage(20, 400);
console.log(car1);
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
