var hamburguer = document.getElementById("burguer")

hamburguer.addEventListener("click", function(){
    var nav2 = document.getElementById("header2")

    if (nav2.className === "aberto"){
        nav2.className = "header2"
    }else{
        nav2.className = "aberto"
    }
})