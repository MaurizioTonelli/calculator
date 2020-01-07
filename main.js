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
    let token = getToken(obj);
    while(true){
        switch(token.value){
            case '*':
                left*=primary(obj);
                token = getToken(obj);
                break;
            case '/':
                left/=primary(obj);
                token = getToken(obj);
                break;
            case '(':
                let d = primary(obj);
                left*=d;
                token = getToken(obj);
                if(token.value != ')'){
                    return 'error';
                }
                token = getToken(obj);
                break;
            default:
                if(Number.isNaN(left) || left[0] == 'e'){
                    return 'Error';
                }
                let ch = token.value;
                obj.value = ch + obj.value;
                return left;
        }
    }
}

function expression(obj){
    let left = term(obj);
    let token = getToken(obj);
    while(true){
        switch(token.value){
            case '+':
                left=Number(left)+Number(term(obj));
                token = getToken(obj);
                break;
            case '-':
                left=Number(left)-Number(term(obj));
                token = getToken(obj);
                break;
            default:
                if(Number.isNaN(left) || left[0] == 'e'){
                    return 'Error';
                }
                let ch = token.value;
                obj.value = ch + obj.value;
                return left;
        }
    }
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