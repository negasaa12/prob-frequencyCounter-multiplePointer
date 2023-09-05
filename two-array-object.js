// add whatever parameters you deem necessary
function twoArrayObject(keys,values){

    const results = {};

    for(let i = 0; i < keys.length; i++){

        results[keys[i]] = values[i] !== undefined ? values[i] : null;
    }
    return results
}
