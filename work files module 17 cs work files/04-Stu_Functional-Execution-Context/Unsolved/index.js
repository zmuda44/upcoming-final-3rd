// returns the average value of an array of numbers


function avg(array) {
  
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total
  }
  
  const totalSum = sum(array)
  
  let average = totalSum/array.length;
  console.log(average)
}

avg([10, 20, 30, 40, 50, 30])

module.exports = avg;
