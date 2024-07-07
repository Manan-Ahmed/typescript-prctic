"use strict";
// let user: string | number = 'haider'
let car = {
    name: 'Mehran',
    model: 2009,
    varient: 'VXR',
    isAutomatic: false,
    features: ["Air Bags", "Air Conditioned"],
    calculateAvg: (fuelQty, distance) => {
        console.log(fuelQty, distance);
    }
};
car.lounchYear;
console.log(car);
// type Car = {
//     name: string,
//     model: number,
//     varient: string,
//     isAutomatic: boolean,
//     features: string[],
//     launchedYear?: number,
//     calculateAvg?: (fuelQty: number, distance: number) => void
// }
// let car: Car = {
//     name: 'Mehran',
//     model: 2009,
//     varient: 'VXR',
//     isAutomatic: false,
//     features: ["Air Bags", "Air Conditioned"],
//     calculateAvg: (fuelQty, distance) => {
//     }
// }
// car.launchedYear = 2000;
// console.log(car)
// // car.lounchYear = 2000;
