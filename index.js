// Code your solution in this file!

const scuberHq = 42;
const sizeOfOneBlockInFeet = 264;
/**Fare in cents per foot for a distance between 400 and 2000 feet */
const farePerFoot = 2;
/**Fare in USD for a distance over 2000 feet */
const flatFee = 25;

/**Returns the number of blocks from Scuber's headquarters to the pickup location */
function distanceFromHqInBlocks(pickupLocation) {
    let distanceFromHqInBlocks = pickupLocation - scuberHq;
    return distanceFromHqInBlocks > 0 ?  distanceFromHqInBlocks : distanceFromHqInBlocks * -1;
}

//console.log(distanceFromHqInBlocks(34));

/**Returns the number of feet from Scuber's headquarters to the pickup location */
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * sizeOfOneBlockInFeet;
}

//console.log(distanceFromHqInFeet(34));

/**Calculates the number of feet a passenger travels given a starting block and an ending block */
function distanceTravelledInFeet(start, destination) {
    let numberOfBlocks = start - destination;

    return numberOfBlocks > 0 ? numberOfBlocks * sizeOfOneBlockInFeet : (numberOfBlocks * -1) * sizeOfOneBlockInFeet;
}

//console.log(distanceTravelledInFeet(34, 43));

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let distanceMinusFreeDistance = distance - 400;

    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distanceMinusFreeDistance * farePerFoot) / 100;
    }
    else if (distance > 2000 && distance < 2500) {
        return flatFee;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(34, 24));