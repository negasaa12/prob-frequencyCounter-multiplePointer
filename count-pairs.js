// add whatever parameters you deem necessary

function countPairs(arr, target) {
    const seenNumbers = {};
    let count = 0;
  
    for (let num of arr) {
      const complement = target - num;
  
      if (seenNumbers[complement]) {
        count++;
      }
  
      seenNumbers[num] = true;
    }
  
    return count;
  }