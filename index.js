// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length-2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function fetchSpecifiedDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}

function createFareMultiplier(number){

    return function(number){
        return number * number
    }
}

function fareDoubler(number){
    return number * 2
}

function fareTripler(number){
    return number*3
}