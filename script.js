let primo;
let buffer = "";
let a;

function update(input){
    if(input === '='){
        calcola();
    }
    else if(input ==='CE'){
        buffer = '';
    }else{
        buffer += input;
    }
    display();
}

function display(){
    document.getElementById("risultato").innerHTML = buffer;
}

function calcola(){
    buffer = eval(buffer);
}