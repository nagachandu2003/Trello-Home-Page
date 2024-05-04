window.onload = function() {
    let seemore = document.getElementsByClassName("seemore")[0];
    let closes = document.getElementsByClassName("closes")[0];
    let navcont = document.getElementById("sm-nav-cont");

    function fun1() {
        seemore.classList.add("dis");
        navcont.classList.remove("dis");
        closes.classList.remove("dis");
    }

    function fun2(){
        navcont.classList.add("dis");
        closes.classList.add("dis");
        seemore.classList.remove("dis");
    }

    // if (seemore) {
        seemore.addEventListener("click", fun1);
    // }

    // if (closes) {
        closes.addEventListener("click", fun2);
    // }
};