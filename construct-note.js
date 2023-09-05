// add whatever parameters you deem necessary

function makeFreqCounter(arr){

    const freqCounter = {};
   

    for(let el of arr){
        freqCounter[el] = (freqCounter[el] + 1) || 1;
    }

    return freqCounter;
}



function constructNote(str1, str2){

    const strObj1 = makeFreqCounter(str1);
    const strObj2 = makeFreqCounter(str2);

        for(let key in strObj1){
            if(strObj2[key] !== strObj1[key]) return false
        }

    return true;
}