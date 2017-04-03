var exports = module.exports = {};


exports.standard_deviation = (inputArray) => {

if(inputArray.length < 1) throw console.error("Standard Deviation Array Length must be 2 or more");

  let arrayAverage = arr => arr.reduce((sum, x) =>x + sum  ,0) / arr.length;

  let averageOrders = arrayAverage(inputArray)
  console.log("Average Orders:", averageOrders)

  let differences = inputArray.map(x => x - averageOrders).map(x => x * x)
  console.log("Differences:",differences);

  let variance = arrayAverage(differences)
  console.log("Variances:",variance)

  let standardDeviation = Math.sqrt(variance)

  //Returns array of predicates on values of input array
  let outLier =  inputArray.map( x => Math.abs(x - averageOrders) > standardDeviation)
  console.log("Is outlier:",outLier)

  return outLier

}
