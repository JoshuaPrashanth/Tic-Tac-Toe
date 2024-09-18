let turnbox = document.querySelector(".xlogo_2");
let xbox = document.querySelector(".xbox");
let ybox = document.querySelector(".ylogo");
let restart = document.querySelector(".restart");
let box = document.querySelectorAll(".box");
let winmessage = document.querySelector(".winmessage");
let turnX = true;
const matches = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const disbox = () => {
    for(let square of box){
        square.disabled = true;
    }
}
const enabox = () => {
    for(let square of box){
        square.disabled = false;
        square.innerText = "";
    }
}
const showin = (champ) => {
    winmessage.classList.remove("hide");
    winmessage.innerText = "Congrats, Winner is "+ champ;
}
const winner = () => {
    for(pattern of matches) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 == pos2 && pos2 == pos3) {
                disbox();
                showin(pos3);
            }
        }
    }
}
box.forEach((box) => {
    box.addEventListener("click",() =>{
         if (turnX) {
            turnbox.classList.add("xlogo_2");
            turnbox.innerText = "O";
            turnX = false;
            box.classList.add("xbox");
            box.innerText = "X";
            box.disabled = true;
        }
        else {
            turnbox.classList.add("xlogo_2");
            turnbox.innerText = "X";
            turnX = true;
            box.classList.add("ybox");
            box.innerText = "O";
            box.disabled = true;
        }
        winner();
    })
})
const reset = () => {
    enabox();
    winmessage.classList.add("hide");
    turnX = true;
}
restart.addEventListener("click", reset);

