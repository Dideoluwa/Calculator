let result=document.getElementById('inputtext');

function calculate(number){
    result.value=result.value+number;
}

let sum=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(error){
        alert('Enter the valid input');
        
    }
}
let clr=()=>{
    result.value="";
}
let del=()=>{
    result.value=result.value.slice(0,-1)
}
let per=()=>{
    result.value=(result.value/100);
}