let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgconainter=document.querySelector(".msg-container");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let heading=document.querySelector(".head");
let turno=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turno)
        {
            box.innerText="0";
            turno=false;
        }     
        else
        {
            box.innerText="X";
            turno=true;
        }
        count++;
        box.disabled=true;

        let isWinner=checkwinner();
        if(count==9 && !isWinner)
            gameDraw();
    })
})


const gameDraw=()=>
{
    msg.innerText = `Game was a Draw.`;
    msgconainter.classList.remove("hide");
    disableBoxes();
}
const enableBoxes=()=>
{
    for(let b of boxes)
    { 
        b.disabled=false;
        b.innerText="";
        b.classList.remove("hide");
        resetbtn.classList.remove("hide");
        heading.classList.remove("hide");
    }
}

const disableBoxes=()=>
{
    for(let b of boxes)
    {
        b.disabled=true;
        b.classList.add("hide");
        resetbtn.classList.add("hide");
        heading.classList.add("hide");



    }
}

const showwinner=(winner)=>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgconainter.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>
{
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showwinner(pos1);
                return true;
            }
        }
    }
};

const resetgame=()=>
{
    count=0;
    turno=true;
    enableBoxes();
    msgconainter.classList.add("hide");
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);