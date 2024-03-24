// cars: Write a function that stores information about a car in a object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the object that's returned to make sure all the information was stored correctly.

import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraoption: { [key: string]: any} []):
object {

    const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraoption)
}
return carInfo;
};

let answere = storeCarInfo('Lamborghini', 'Ferrari', {color: 'Red'}, {features: ['Navigation', 'Power window']});

console.log(answere);