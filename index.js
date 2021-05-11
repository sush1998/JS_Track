//get the exp amount element
const expAmount=document.querySelector("#expAmount");

//get the exp description element
const expDesc=document.querySelector("#expDesc");

//get the add button element
const addbtn=document.querySelector("#btnAdd");

//get the reset button element 
const reset=document.querySelector("#btnReset");

//get the heading element
const heading=document.querySelector("#total");

//get the expenseTable element
const expenseTableEl=document.querySelector("#expenseTable");

//initialize totalExp
let totalExp=0;

//allExp at one place
let allExpense=[];

//add Expense
function addExpense()
{
    let expenseItem={};

    //fetch amount
    let expAmt=expAmount.value;
    let amount=parseInt(expAmt,10);
    
    //fetch discription
    let disc=expDesc.value;

    //get date
    var now=new Date();

    //fetch moment
    const mom=getDateString(now);
    // console.log(mom); //"9 May,2021"


    //add to expense
    expenseItem.amt=amount;
    expenseItem.desp=disc;
    expenseItem.moment=now;  //pushing complete now object
   // console.log(expenseItem.moment);

    //push expense to allexpense
    allExpense.push(expenseItem);

    //add to totalExp
    totalExp=totalExp+amount;

    //set the heading element as totalExp
    const headText=`Total: ${totalExp}`
    heading.textContent=headText;


    //renderListItem(addExpense);
    
    const allExpenseHtML=allExpense.map((expense) => {
        //return `<div>${expense.desp}::${expense.amt}</div>`;
        createItemList(expense);
        
    });
    //convert it to string
    const joinedAllExpenseHtML=allExpenseHtML.join("");
   
    //set the expenseTable value
    expenseTableEl.innerHTML=joinedAllExpenseHtML;


    
    
}

//get date from data Obj
function getDateString(now)
{
    const options={year:'numeric',month:'long',day:'numeric'};
    return now.toLocaleDateString('en-Us',options);
    
}

// function displayItem(arrayToPrint)
// {
//     const allExpenseHtML=allExpense.map((arrayToPrint) => renderListItem(arrayToPrint));
    
//     //convert it to string
//     const joinedAllExpenseHtML=allExpenseHtML.join("");
   
//     //set the expenseTable value
//     expenseTableEl.innerHTML=joinedAllExpenseHtML;
//     console.log("render called");
//     //{

// }

//delete item
function deleteItem(dateString)
{
    console.log("Delete called",dateString);
    //console.log(`${expense.amt}`);
    const newArr=[];
    for(let i=0;i<allExpense.length;i++)
    {
        if(allExpense[i].moment.valueOf() !== dateString)
        {
            newArr.push(allExpense[i]);
        }
    }

    console.log(newArr);
    displayItem(newArr);
    console.log("render printed");
}

function createItemList({desp,amt})
{
    return `<div>${desp}::${amt}</div>`;

}
    
//reset Expense
function resetExpense()
{
    //set totalExp to zero
    totalExp=0;
    //set heading to totalExp
    heading.innerHTML=totalExp;

    //make allExpense array to empty
    allExpense=[];

    //call displayExpense function
    renderListItem(allExpense);
}

//
addbtn.addEventListener('click',addExpense,false);
reset.addEventListener('click',resetExpense,false);