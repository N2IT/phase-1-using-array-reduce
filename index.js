const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let init = 0;
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => 
    accumulator + currentValue, init);

console.log(totalBatteries)

