// add whatever parameters you deem necessary

function averagePair(nums,target){


    let left = 0;
    let right = nums.length -1;

    while(left < right){
        let average = (nums[left] + nums[right]) / 2;
        
        if(average == target){
            return true
        } else if( average < target){
            left ++
        } else{
            right--
        }
        
    }
 
    
}