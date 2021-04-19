function carregar(){
var txtmsg = window.document.getElementById('msg')
var txtimagem = window.document.getElementById('imagem')
var txthora = new Date()
var txtminuto = new Date()
var hora = txthora.getHours()


msg.innerHTML=`Agora são ${hora} horas.`
if ( hora >=4 && hora<12){
   msg.innerHTML+=" Bom dia!"
   img.src=`Manha.png`
   document.body.style.background = `#fea420`

} else if ( hora >=12 && hora <=18){

   msg.innerHTML+=" Boa tarde!"
   img.src=`Tarde.png`
   document.body.style.background= `#516289`
}else {
   msg.innerHTML+=" Boa Noite!"
    img.src= `Noite.png`
    document.body.style.background= `#0e0e0e`

}
}
