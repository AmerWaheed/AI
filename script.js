// =========================
// AI Birthday Engine
// =========================

const terminal = document.getElementById("terminal");
const btn = document.getElementById("startBtn");

const epochText = document.getElementById("epoch");
const accuracyText = document.getElementById("accuracy");
const lossText = document.getElementById("loss");
const progressBar = document.getElementById("bar");

const result = document.getElementById("result");

// =========================
// Matrix Background
// =========================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}()#@$%";

const size = 16;

const columns = Math.floor(canvas.width / size);

const drops = [];

for(let i=0;i<columns;i++){

    drops[i]=1;

}

function drawMatrix(){

    ctx.fillStyle="rgba(5,8,22,.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff99";
    ctx.font=size+"px monospace";

    for(let i=0;i<drops.length;i++){

        const text=
        chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(
            text,
            i*size,
            drops[i]*size
        );

        if(
            drops[i]*size>canvas.height &&
            Math.random()>0.98
        ){
            drops[i]=0;
        }

        drops[i]++;

    }

}

setInterval(drawMatrix,35);

window.onresize=()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

// =========================
// Terminal Writer
// =========================

function sleep(ms){

return new Promise(r=>setTimeout(r,ms));

}

async function write(text,speed=18){

for(let c of text){

terminal.innerHTML+=c;

terminal.scrollTop=terminal.scrollHeight;

await sleep(speed);

}

terminal.innerHTML+="<br>";

}

// =========================
// Training
// =========================

btn.onclick=async()=>{

btn.disabled=true;

terminal.innerHTML="";

await write(">>> Initializing AI Engine...");
await write("Loading TensorFlow...");
await sleep(500);

await write("Loading NumPy...");
await sleep(500);

await write("Loading Pandas...");
await sleep(500);

await write("Loading Scikit-Learn...");
await sleep(500);

await write("Connecting GPU...");
await sleep(700);

await write("GPU Found ✔");
await sleep(600);

await write("");
await write("Preparing Dataset...");
await sleep(1000);

await write("18524 Samples Loaded");
await write("Feature Engineering...");
await sleep(900);

await write("Done ✔");
await write("");

for(let i=1;i<=10;i++){

let acc=40+i*6;

if(acc>100) acc=100;

let loss=(1/i).toFixed(4);

epochText.innerHTML=i+"/10";

accuracyText.innerHTML=acc+"%";

lossText.innerHTML=loss;

progressBar.style.width=(i*10)+"%";

await write(
`Epoch ${i}/10 | loss=${loss} | accuracy=${acc}%`
);

await sleep(800);

}

await write("");
await write("Saving Model...");
await sleep(1000);

await write("Prediction Started...");
await sleep(1500);

await write("");
await write("Searching for the best instructor...");
await sleep(2000);

await write("");
await write("Confidence: 99.99999%");
await sleep(1200);

await write("");
await write("✔ Best Instructor Detected");
await sleep(1500);

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

await sleep(1500);

result.classList.remove("hidden");

}