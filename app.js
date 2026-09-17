let num1="";
let num2="";
let operator="";
let result=null;
let nextNum=false;
let btns=document.querySelectorAll(".addbtns");
let p=document.querySelector('p');
function showDisplay() {
    p.innerText =`${num1} ${operator} ${num2}`;
  
    let storeCal=p.innerText;
    localStorage.setItem('finalCal',storeCal);
    
}
for(let btn of btns)
btn.addEventListener("click", function(){
    console.log(btn.innerText);
let value = btn.innerText;

if (value === 'C') {
    num1 = "";
    num2 = "";
    operator = "";
    nextNum = false;
    p.innerText="";
    console.log("Cleared");
    p.innerText="";
    return;
  }

if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
    nextNum = true;
    showDisplay();
    return;
  }

  if (value === '=') {
    let n1 = Number(num1);
    let n2 = Number(num2);

    if (operator==='+') result = n1 + n2;
    if (operator==='-') result = n1 - n2;
    if (operator==='*') result = n1 * n2;
    if (operator==='/') {
    if(n2!==0)
      {
        result=n1/n2;
      }else{
        console.log("ERROR!!");
        p.innerText="Error!!";
        return;
      
       
      }
      // if(p.innerText==='Error!!'){
      //     p.style.color='red';
      // }
    }
    console.log("Result: "+result);
    num1 = result.toString();
    num2 = "";
    nextNum = false;

     p.innerText =`${result.toString()}`;
    let storeRes=p.innerText;
    localStorage.setItem('finalRes',storeRes)
    return;
  }
  if (value === 'del') {
    if (operator && num2 === "") {
        operator = "";
        nextNum = false;
    } else if (!nextNum) {
        num1 = num1.slice(0, num1.length-1);
    } else {
        num2 = num2.slice(0, num1.length-1);
    }
    showDisplay();
    return;
}
  if (!nextNum) {
    num1 += value;
    console.log("num1: " + num1);
  } else {
    num2 += value;
    console.log("num2: " + num2);
  }
    showDisplay(); }
);