if (sessionStorage.getItem("guessCounter") === null) {
    sessionStorage.setItem("guessCounter", "2");
    let availableRooms = ["room1", "room2", "room3"]; 
    sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
}

if (document.getElementById("YesHome")) {
    document.getElementById("YesHome").addEventListener("click", function () {
        window.location.href = "pickABox.html";
        sessionStorage.removeItem("guessCounter")
        sessionStorage.removeItem("room1")
        sessionStorage.removeItem("room2")
        sessionStorage.removeItem("room3")

    });
}

if (document.getElementById("guessesID")) {
    let guessCounter = parseInt(sessionStorage.getItem("guessCounter")); // Convert string to number
    if(guessCounter<0){
        document.getElementById("guessesID").textContent = "NO guesses left,To Restart Press Quit";
    }
    else if (guessCounter === 0) {
        document.getElementById("guessesID").textContent = "You LOST but I'll give you a last chance 3ashan enty HABIBTY❤️";
    } else {
        document.getElementById("guessesID").textContent = "You have " + guessCounter + " guesses left";
    }
}


//////////////////////////////////////////////////ROOM1////////////////////////////
if (document.getElementById("room1") && sessionStorage.getItem("room1")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==3) {
    document.getElementById("room1").addEventListener("click", function () {
        window.location.href = "room1.html";
        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());
        sessionStorage.setItem("room1", "visited");
        availableRooms = ["room2", "room3"]; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}

if (document.getElementById("room1") && sessionStorage.getItem("room1")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==2) {
    document.getElementById("room1").addEventListener("click", function () {
        window.location.href = "room2.html";
        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());
        sessionStorage.setItem("room1", "visited");
        availableRooms = ["room3"]; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}

if (document.getElementById("room1") && sessionStorage.getItem("room1")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==1) {
    document.getElementById("room1").addEventListener("click", function () {
        window.location.href = "room3.html";
        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());
        sessionStorage.setItem("room1", "visited");
        availableRooms = []; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}

////////////////////////////////////////////////ROOM2////////////////////////////
if (document.getElementById("room2") && sessionStorage.getItem("room2")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==3) {
    document.getElementById("room2").addEventListener("click", function () {
        window.location.href = "room1.html";

        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());
        sessionStorage.setItem("room2", "visited");
        availableRooms = ["room2", "room3"]; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}
if (document.getElementById("room2") && sessionStorage.getItem("room2")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==2) {
    document.getElementById("room2").addEventListener("click", function () {
        window.location.href = "room2.html";

        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());
        sessionStorage.setItem("room2", "visited");
        availableRooms = ["room3"]; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}
if (document.getElementById("room2") && sessionStorage.getItem("room2")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==1) {
    document.getElementById("room2").addEventListener("click", function () {
        window.location.href = "room3.html";

        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());
        sessionStorage.setItem("room2", "visited");
        availableRooms = []; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}

////////////////////////////////////////////////ROOM3////////////////////////////
if (document.getElementById("room3") && sessionStorage.getItem("room3")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==3) {
    document.getElementById("room3").addEventListener("click", function () {
        window.location.href = "room1.html";

        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());

        sessionStorage.setItem("room3", "visited");
        availableRooms = ["room2", "room3"]; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}
if (document.getElementById("room3") && sessionStorage.getItem("room3")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==2) {
    document.getElementById("room3").addEventListener("click", function () {
        window.location.href = "room2.html";

        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());

        sessionStorage.setItem("room3", "visited");
        availableRooms = ["room3"]; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}
if (document.getElementById("room3") && sessionStorage.getItem("room3")!="visited" && JSON.parse(sessionStorage.getItem("availableRooms")).length==1) {
    document.getElementById("room3").addEventListener("click", function () {
        window.location.href = "room3.html";

        var guessCounterUpdated = parseInt(sessionStorage.getItem("guessCounter"));
        guessCounterUpdated--;
        sessionStorage.setItem("guessCounter", guessCounterUpdated.toString());

        sessionStorage.setItem("room3", "visited");
        availableRooms = []; 
        sessionStorage.setItem("availableRooms", JSON.stringify(availableRooms));
    });
}

if(sessionStorage.getItem("room1")==="visited" && document.getElementById("room1")){
    document.getElementById("room1").disabled=true;
    document.getElementById("room1").style.backgroundColor = "gray";
}

if(sessionStorage.getItem("room2")==="visited" && document.getElementById("room2")){
    document.getElementById("room2").disabled=true;
    document.getElementById("room2").style.backgroundColor = "gray";
}

if(sessionStorage.getItem("room3")==="visited" && document.getElementById("room3")){
    document.getElementById("room3").disabled=true;
    document.getElementById("room3").style.backgroundColor = "gray";
}

if(document.getElementById("QuitBtn") && document.getElementById("QuitBtn")){
    document.getElementById("QuitBtn").addEventListener("click",function(){
        window.location.href = "index.html"
    })
}

if(document.getElementsByClassName("BackButtonJS")){
    var buttons = document.getElementsByClassName("BackButtonJS")
    console.log(buttons.length)
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",function(){
            window.location.href = "pickABox.html"
        })
    }
}