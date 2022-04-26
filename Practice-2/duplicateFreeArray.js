function duplicateFreeArray(arr){
    
    let unique_elements = [];
    
    // looping through array
    for(let i of arr) {
        if(unique_elements.indexOf(i) === -1) {
            unique_elements.push(i);
        }
    }
    
    console.log(unique_elements);
}
//input provided
const arr = [1, 2, 3, 1, 2];

// calling the function

duplicateFreeArray(arr);