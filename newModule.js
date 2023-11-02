function doSomething(){
    console.log("*doSomething called from newModule.js *****")
}


function againdoSomething(){
    console.log("** againdoSomething called from newModule.js ****")
}

//CRUD - Creat, Read, Update, Delet

let arr = [];

function createFun(element){
    arr.push(element);
    return arr;
}

function readFun(){
    return arr;
}

function updateFun(index, element){
    arr[index] = element;
    return arr;
}

function deletfun(index){
    arr.splice(index, 1)
    // delet 1 value at given index
    return arr;

}

module.exports = {
    doSomething,
    againdoSomething,
    createFun,
    readFun,
    updateFun,
    deletfun

};