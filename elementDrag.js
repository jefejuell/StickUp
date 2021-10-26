let stick = document.getElementById("dragDiv");

function dragElement(stick) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(stick.id + "header")) {
        document.getElementById(stick.id + "header").onmousedown = dragMouseDown;
    } else {
        stick.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag (e) {
        e.e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 = e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        stick.style.top = (stick.offsetTop - pos2) + "px";
        stick.style.left = (stick.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}