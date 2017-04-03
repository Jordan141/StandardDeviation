
function standard_deviation(inputArray){

if(inputArray.length < 1) throw console.error("Standard Deviation Array Length must be 2 or more");

  let arrayAverage = arr => arr.reduce((sum, x) =>x + sum  ,0) / arr.length;

  let averageOrders = arrayAverage(inputArray)

  let differences = inputArray.map(x => x - averageOrders).map(x => x * x)

  let variance = arrayAverage(differences)

  let standardDeviation = Math.sqrt(variance)

  return inputArray.map(x => x - averageOrders - standardDeviation > 0)

}

export default standard_deviation;
