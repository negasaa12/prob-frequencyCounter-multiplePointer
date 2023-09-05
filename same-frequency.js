// add whatever parameters you deem necessary



function makeFreqNumCounter(nums){

    const freqCounter = {};
    const stringNum = nums.toString();

    for(let el of stringNum){
        freqCounter[el] = (freqCounter[el] + 1) || 1;
    }

    return freqCounter;
}
 
function sameFrequency(num1,num2){

   
    const numFreq1 =  makeFreqNumCounter(num1);
    const numFreq2 =  makeFreqNumCounter(num2);
   
   if(numFreq1.length !== numFreq2.length) return false;
   
   for(let key in numFreq1){

       if(numFreq2[key] !== numFreq1[key]){
           return false;
       }
   }

   return true;
}