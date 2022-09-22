'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*
*  
*  
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a,b){return b-a})
    let buyuk=nums.find(function (sayi){
        let dizininbuyugu=nums[0]
        return sayi<dizininbuyugu
        })
    
    return buyuk
    
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
