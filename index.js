const headQ = 42
const feet = 264
function distanceFromHqInBlocks (pickup) {
    if (pickup > 42) {
        return (pickup - headQ);
    } else if (pickup < 42) {
        return (headQ - pickup)
    }
}
function distanceFromHqInFeet(distanceFromHqInBlocks){
    return (distanceFromHqInBlocks*feet)
}
