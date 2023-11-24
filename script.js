var blur = document.querySelector(".spoint",".main")

document.addEventListener("mousemove", function (dets) {
    blur.style.left = dets.x -250 + "px";
    blur.style.top = dets.y -250 + "px";
})

function Drop() {
    var drop = document.getElementById("elem");
    drop.style.display = "block"
}

function pop() {
    var pop = document.getElementById("elem");
    pop.style.display = "none" 
}

function aler(){
        alert("This site has not the backend")
}