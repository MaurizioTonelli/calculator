//Add tokenStream
//Add token

function getToken(obj){
    let val = '';
    if(obj.value == '') return false;
    if((obj.value[0] >='0' && obj.value[0]<='9')||obj.value[0] == '.'){
        while((obj.value[0] >='0' && obj.value[0]<='9')||obj.value[0] == '.'){
            val+=obj.value[0];
            obj.value=obj.value.slice(1);
        }
        return {value: val, type: 'int'};
    }else{
        val =obj.value[0];
        obj.value=obj.value.slice(1);
        return {value: val, type: 'operator'}; 
    }
}

function primary(obj){
    let token = getToken(obj);
    switch(token.type){
        case 'int':
            return token.value;
            break;
        case 'operator':
            if(token.value == '('){
                let left = expression(obj);
                token = getToken(obj);
                if(token.value != ')'){
                    return 'error';
                }
                return left;
            }else{
                return 'error';
            }
    }
}

function term(obj){
    let left = primary(obj);
}

function expression(obj){
    let left = term(obj);
}

function calculate(str){

    let exp ={value: str};
    return expression(exp);
}

function writeToDisplay(e){
    const display = document.querySelector('.display');
    if(this.id == "clear"){
        display.textContent = "0";
        return;
    }
    if(this.id == "="){
        display.textContent = calculate(display.textContent);
        return;
    }
    if(display.textContent == '0'){
        display.textContent = this.id;
    }else{
        display.textContent += this.id;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener('click', writeToDisplay);
});