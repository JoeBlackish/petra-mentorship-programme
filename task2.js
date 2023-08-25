//FUNCTION TO PRINT OUT ALL EVEN NUMBERS FROM AN ARRAY

function getEvenNumbers(nums){
  const accumulator = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      accumulator.push(nums[i]);
    }
  }
  return accumulator;
}

console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));