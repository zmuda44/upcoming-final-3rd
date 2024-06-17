// 1) Where is carNoise stored?
//
const carNoise = 'Honk';
// 2) Where is goFast stored?
// 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // It is assigned a value as an argument to the function 80. i believe this value is stored as long as this function runs in the call stack. if it's high in the call stack it is in memory longer
  
  // 5) Where is makeNoise stored?
  // const in the global context. i believe this is permanmently stored in memory
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // you are calling the function inside the function speed. this will only run when speed is called but will run automatically when it does
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// the confirm is true run goFast with a variable 80 to the function
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
