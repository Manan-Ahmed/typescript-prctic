// let user: string | number = 'haider'

// user = 321
// console.log(user)



// let friuts: string[] = ['apple','banana']

// friuts.push('1')


// console.log(friuts)


// let mixArr: (string | number)[] = ['apple','banana'] 


// mixArr.push(1)

// console.log(mixArr)



// let user: any ;
// user = 'haider';

// user = 2;

// user = true;

// console.log(user)




// type Mixed = string | number | boolean


// let a: Mixed = 'haider'

// let b: Mixed = 12
// let c: Mixed = false



// console.log(a,b,c)


type Car = {
    name: string,
    model: number,
    varient: string
    isAutomatic: boolean,
    features:string[],
    lounchYear?: number,
    calculateAvg?: (fuelQty: number , distance: number) => void

    }




let car: Car = {
    name: 'Mehran',
    model: 2009,
    varient: 'VXR',
    isAutomatic: false,
    features: ["Air Bags", "Air Conditioned"],
    calculateAvg: (fuelQty, distance) => {
        console.log(fuelQty , distance)
}
}


car.lounchYear
console.log(car)














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










