
const addbtn=document.querySelector("#btnAdd");
const reset=document.querySelector("#btnReset");
const out=document.querySelector("#out");
let totalExp=0;
function addExpense()
{
    const exp=document.querySelector("#expenseText");
    const expText=exp.value;
    let expense=parseInt(expText,10);
    //console.log({expense})
    totalExp=totalExp+expense;
    out.innerHTML=totalExp;
    //console.log(typeof(expense));
    
}

function resetExpense()
{
    totalExp=0;
    out.innerHTML=totalExp;
}
addbtn.addEventListener('click',addExpense,false);
reset.addEventListener('click',resetExpense,false);