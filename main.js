function calculate(str){
    return '0';
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