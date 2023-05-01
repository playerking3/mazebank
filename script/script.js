// menu hamburguer
var hamburguer = document.getElementById("burguer")

hamburguer.addEventListener("click", function(){
    var nav2 = document.getElementById("header2")

    if (nav2.className === "aberto slide-down"){
        nav2.className = "header2"
    }else{
        nav2.className = "aberto slide-down"
    }
})

//texto que some quando fecho a aba
let disclaimer = document.getElementById("disclaimer")

function some(){
    disclaimer.style.display = "none"
}

// para mudar a cor do cartão de debito
let foto = document.getElementById("mazeDebito").attributes

function mudacor(x){
    let link = x.attributes[0].value
    foto.getNamedItem("src").value = "img/maze-debit-"+link+".png"
    x.style.padding = "4px"
}
function bordanormal(x){
    x.style.padding = "0px"
}