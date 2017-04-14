// Do your work in this file.

var boxes = document.querySelectorAll(".box");
var color;
var n = boxes.length;
console.log(boxes.length);


if (201 <= n && n <= 300) {
    color = "yellow";
} else if (301 <= n && n <= 400) {
    color = "green";
} else if (401 <= n && n <= 500) {
    color = "purple";
} else if (501 <= n && n <= 600) {
    color = "orange";
} else if (601 <= n && n <= 700) {
    color = "pink";
} else if (701 <= n && n <= 800) {
    color = "black";
} else if (801 <= n && n <= 900) {
    color = "brown";
} else {
    color = "blue";
}


for (var i=0; i<n; i++){
    (function(i){
        boxes[i].onclick = function(){
            boxes[i].style.backgroundColor = color;
             if(boxes[i].className == "box"){
        boxes[i].className = "clicked";
            } else {
                boxes[i].className == "box";
            }

        }
    })(i)
}

// function boxiClicked(){
//     boxes[i].style.backgroundColor = color;
// }

// for (var i=0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", boxiClicked);
// }


    


    // if(boxes[i].className == "box"){
    //     boxes[i].className = "clicked";
    // } else {
    //     boxes[i].className == "box";
    // }



