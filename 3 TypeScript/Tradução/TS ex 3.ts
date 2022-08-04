export  {} //Avoid duplicate variables error

let refreshButton = document.getElementById('add-balance');
let cleanButton = document.getElementById('clean-balance');
let sum = document.getElementById('sum') ! as HTMLInputElement;
let balance = document.getElementById('balance');

let totalBalance = 0;

cleanBalance();
function addBalance (sum: number) {
    if(balance){
        totalBalance += sum;
        balance.innerHTML = totalBalance.toString();
        cleanBalanceInput();
    }
}
function cleanBalanceInput(){
    sum.value = " ";
}
function cleanBalance(){
    if(balance){
        totalBalance = 0;
        balance.innerHTML = balance.toString() 
    }
}
if(refreshButton){
    refreshButton.addEventListener('click', () => {
        addBalance(Number(sum.value));
    });
}
cleanButton?.addEventListener('click', () => {
    cleanBalance();
});

