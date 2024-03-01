let samplingDefiningArray = [2, 3, 3, 4, 4, 3, 3, 2];
// maybe cross multiply 2x2 or 3x3 array

let presIntervalIter=0;

function nextInterval(){
    if (presIntervalIter < 7){
        let toRet = samplingDefiningArray[presIntervalIter];
        presIntervalIter++;
        return toRet;
    }
    else{
        let toRet = samplingDefiningArray[presIntervalIter];
        presIntervalIter=0;
        return toRet;
    }
}

let arrayTested = [];

function populateArray(seedCount=0, vals=[]){
    
}

function simpleSeedArray(seedCount=0, seed=0){
    let toRetArray=[];
    for (let i=0; i<seedCount; i++){
        toRetArray[i] = seed;
    }
}

function displaceOneWithRNG(arr=[], displacement=0){
    let positionToDisplace = Math.random()*(arr.length);
    arr[positionToDisplace] = displacement;
}

function displaceMultipleWithRNG(arr=[], displacements=[], ){ // what about distribution of RNG? 
    
}



// which interval is best where, where is there an advantage? if even sampling standard, what size??
