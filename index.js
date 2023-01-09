function distanceFromHqInBlocks(someValue){
    if(someValue <= 42){
        return 42 - someValue;
    } else { 
        return someValue - 42;
    }
}

function distanceFromHqInFeet(someValue){
   someValue =  distanceFromHqInBlocks(someValue);
    return someValue * 264;
}

function distanceTravelledInFeet(start, destination){
    let distance;
    if(start < destination) {
        distance = (destination - start) * 264;
        return distance;
    } else {
        distance = (start - destination) * 264;
        return distance;
    }
}

function calculatesFarePrice(start, destination) {
    let price;
    let distance = distanceTravelledInFeet(start, destination)
    console.log(distance);
    if(distance <= 400){
        price = 0;
        return price;
    } 
    else if (400 < distance && distance <= 2000){
        console.log(distance);
        distance = distance - 400;
        price = distance * 0.02;
        return price;
    } 
    else if(2000 < distance && distance <= 2500){
        price = 25;
        return price;
    } 
    else {
        return 'cannot travel that far';
    }
}
