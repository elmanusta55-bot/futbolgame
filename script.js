let score=0;

function shoot(direction){

const keeper=document.getElementById("keeper");

const positions={
left:"20px",
center:"120px",
right:"220px"
};

const options=["left","center","right"];

const random=
options[Math.floor(Math.random()*3)];

keeper.style.left=
positions[random];

if(direction!==random){

score++;

document.getElementById(
"score"
).innerText=score;

alert("GOAL!");
}
else{

alert("Saved!");
}
}
