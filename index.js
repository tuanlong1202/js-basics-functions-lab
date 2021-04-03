// Code your solution in this file!

const intFeetPerBlock = 264;

function distanceFromHqInBlocks(intStr) {
    var intCurrent = 42 ;
    if (intStr < intCurrent)
        return intCurrent - intStr;
    else 
        return intStr - intCurrent;
}

function distanceFromHqInFeet(intStr) {
    return distanceFromHqInBlocks(intStr)*intFeetPerBlock ;
}

function distanceTravelledInFeet(intStartPosition, intDestinationPosition) {
    if (intDestinationPosition >= intStartPosition)
        return (intDestinationPosition - intStartPosition)*intFeetPerBlock;
    else    
        return (intStartPosition - intDestinationPosition)*intFeetPerBlock;
}

function calculatesFarePrice(intStart, intDestination) {
    var intTravelledInFeet = distanceTravelledInFeet(intStart, intDestination);
    if (intTravelledInFeet <= 400)
        return 0;
    else if (intTravelledInFeet > 400 && intTravelledInFeet <= 2000)
        return (intTravelledInFeet - 400) * 0.02;
    else if (intTravelledInFeet > 2000 && intTravelledInFeet < 2500)
        return 25;
    else
        return 'cannot travel that far';
}