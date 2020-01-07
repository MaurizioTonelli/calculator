function calculate(str){
    
}

function writeToDisplay(e){
    const display = document.querySelector('.display');
    if(this.id == "clear"){
        return;
    }
    if(this.id == "="){
        display.textContent = calculate(display.textContent);
        return;
    }
    display.textContent += this.id;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button=>{
    button.addEventListener('click', writeToDisplay);
});