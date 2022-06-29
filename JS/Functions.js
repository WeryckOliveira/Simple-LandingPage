window.onload = function() {
    var exitMenu = document.getElementById("exit-menu");

    exitMenu.addEventListener("click", function(){
        this.classList.toggle("open");
    });
}