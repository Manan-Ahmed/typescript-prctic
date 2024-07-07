"use strict";
// console.log('hello')
// // let basicColor2: string[]
// let basicColor : [string,string,string]
// basicColor = ['red','green','blue']
// console.log(basicColor)
// let mixArr2 : (string|number|boolean)[]
// let mixArr:readonly [string,number,boolean]
// mixArr = ['hello',2,true]
// console.log(mixArr)
// for(let i = 0;i < mixArr.length;i++){
//     console.log(mixArr[i])
// }
// let mixArr2:readonly  [string,number,boolean] = ['world',3,false]
// console.log(mixArr2)
// const pendig = 'pending'
// const deliverd = 'deliverd'
// const shipping = 'shipping'
// const confirmed = 'confirmed'
// enum orderStatus {
//     pendig,
//     confirmed,
//     shipping,
//     deliverd
// }
// console.log(orderStatus.deliverd)
// enum province {
//     sindh = 'sindh',
//     punjab = 'punjab',
//     balochistan = 'balochistan',
//     kpk = 'kpk'
// }
// console.log(province['sindh'])
// for(let prop in province){
//      console.log(prop)
// }
// enum httpCode {
//     success = 200, 
//         badReqest = 400,
//         myMistake = 500
// }
// //   use with value
// console.log(httpCode.success)
// //   use with key
// console.log(httpCode[400])
// enum mathConst {
//     PI = 3.14,
//     ranNum = Math.random(),
//     sum = 5 + 9
// }
// console.log(mathConst.sum)
// console.log(mathConst.ranNum)
// console.log(mathConst.ranNum)
// let a = prompt('enter your name')
// let userName: string = a as string
// let userName2: string = <string>a;
// console.log(userName,userName2)
// let a = prompt("what is your name?");
// let userName: string = a as string;
// let userName2: string = <string>a;
// let user2: (string|number|boolean)[]
// let user: [string,string,string]
// user = ['hello','world','sky']
// console.log(user)
let weatherBox = document.querySelectorAll(".weather-box");
let weatherDetail = document.querySelectorAll(".weather-detail");
let button = document.querySelectorAll("button");
// button.addEventListener('click', () =>{
function search() {
    const apiKey = '377c0da489b85c3759409d925a24b69d';
    const city = document.querySelectorAll("input")[0];
    //    if(city == '') 
    // return
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=matric
    &appid=${apiKey}`).then(response => response.json()).then(json => {
        const pro = document.querySelectorAll(".weather-box img");
        const temprature = document.querySelectorAll(".weather-box temprature")[0];
        const description = document.querySelectorAll(".description")[0];
        const humadities = document.querySelectorAll(".weather-box .humadity span")[0];
        const wind = document.querySelectorAll(".weather-box .wind span")[0];
        console.log(json.weather[0].description);
        console.log(json.main.humadities);
        // switch(json.weather[0].main){
        //   case 'clear':
        //     pro.src = 'images/img.png';
        //     break;
        //     case 'rain':
        //     pro.src = `images/img.png`;
        //     break;
        //     case 'snow':
        //     pro.src = `images/img.png`;
        //     break;
        //     default:
        //       pro.src = `images/img.png`;
        // }
        temprature.innerHTML = `${parseInt(json.main.temprature)}<span>c</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humadities.innerHTML = `${json.main.humadities}`;
        wind.innerHTML = `${parseInt(json.wind.speed)}`;
    })
        .catch((er) => {
        console.log(er);
    });
}
;
