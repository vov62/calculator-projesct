
function btnValue(num1){ // פונקציה ששומרת את האינפוט 
    userInput.value += num1;//2
}

function clearNum(){ // פונקציה שמגדירה את הערך של האינפוט למחרוזת ריקה
    userInput.value = ""
}

function solveNum(){
    let x = userInput.value//  שומר את הערכים שהוקלדו על המסך לדוגמה 2+2
    let y = eval(x);   // תופסת את הערכים במשתנה חדש
    userInput.value = y; // השמה של המשתנה החדש לערך של האינפוט.
}
