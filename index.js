const button=document.querySelector("#btn");
button.addEventListener("click", calculateAmount);
const buttonTip=document.querySelector("#addTip");
buttonTip.addEventListener("click",showTip);
function showTip(e){
    e.preventDefault();
    tip.style.display="block"; 
}
function calculateAmount(e){
    e.preventDefault();
    const bill=document.querySelector("#bill").value;
    const people=document.querySelector("#people").value;
    const tip=document.querySelector("#tip").value;
    const dem=document.querySelector("#dem").value;
    if(bill==="" || people==="" ||people<1 || dem===""){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка...',
            text: 'Введите данные!',
           
          })
    }
let amountPerPerson=bill-dem;
console.log(amountPerPerson);
let tipPerPerson=((bill-dem)*tip)*people;
let totalSum=(amountPerPerson+tipPerPerson)/(people*12);

amountPerPerson=amountPerPerson.toFixed(2);
tipPerPerson=tipPerPerson.toFixed(2);
totalSum=totalSum.toFixed(2);

document.querySelector("#dividedBill").textContent=amountPerPerson;
document.querySelector("#dividedTip").textContent=tipPerPerson;
document.querySelector("#billAndTip").textContent=totalSum;

}