var excuse=[
        "Sorry : I was sick.",
        "Oops : I was sleeping.",
        "It's not my fault : I got hurt."
    ];

function addTo() { 
    excuse.push(document.getElementById("userinput").value); 
    console.log(excuse.length - 1); //to confirm it has been added to the array 
} 


function getExcuses() {
    var newExcuse = excuse[Math.floor(Math.random() * excuse.length)];
    document.getElementById("excuseHere").innerHTML = newExcuse;
}

function getExcuses1() {
    var newExcuse = excuse[Math.floor(Math.random() * excuse.length)];
    document.getElementById("excuseHere1").innerHTML = newExcuse;
}