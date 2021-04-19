function contar() {
var inicio= document.getElementById('txtinicio')
var fim= document.getElementById('txtfim')
var passo= document.getElementById('txtpasso')
var res = document.getElementById('resultado')
var i = Number(inicio.value)
var f = Number(fim.value)
var p = Number (passo.value)


if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || p <=0){
    res.innerHTML='[ERROR] Faltam Dados!'
} else {
    res.innerHTML='Contando...'
    
    if ( i < f){
        for(let c = i; c<= f; c+= p){ //c=contagem
        res.innerHTML+= `\u{1F449} ${c} `
        } 
    }else {
        for(let c = i; c>= f; c-= p){ //c=contagem
        res.innerHTML+= `\u{1F449} ${c} `
        }                
        }res.innerHTML+= `\u{1F3C1}`
    }
}