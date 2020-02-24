let sum = 0;
let enterNumber = parseInt(prompt("Enter a number(enter -1 to exit)"));
while (enterNumber != -1){
    sum += enterNumber;
    alert(sum);
    enterNumber = parseInt(prompt("Enter a number(enter -1 to exit)"));
}