// Only change code below this line
function myForLoop1(){
    var evenNumbers =[0,2,4,6,8];
    for(evenNumbers=0; evenNumbers<12; evenNumbers+=2){
        if(evenNumbers===8){
        return "0, 2, 4, 6, 8";
        }     
    }
    console.log(evenNumbers);
}
function myForLoop2(){
    var evenInverseNumbers = [8,6,4,2,0];
    for(evenInverseNumbers=8; evenInverseNumbers>=0; evenInverseNumbers-=2){
        if(evenInverseNumbers===0){
            return "8, 6, 4, 2, 0";
    }
 
}
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line


module.exports = {
    myForLoop1,
    myForLoop2
};