var n1=parseInt(prompt("Enter 1"));
var n2=parseInt(prompt("Enter 2"));
var n3=prompt("Enter key");
switch(n3)
{
    case '+':
        document.getElementById("result").textContent=(n1+n2);
        break;
    case '-':
        document.getElementById("result").textContent=(n1-n2);
        break;
    case '*':
        document.getElementById("result").textContent=(n1*n2);
        break;
    case '/':
        document.getElementById("result").textContent=(n1/n2);
        break;
    default:
        document.getElementById("result").textContent="Enter your correct operator";
        break;
}