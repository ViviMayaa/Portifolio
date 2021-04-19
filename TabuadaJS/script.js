function calc () {
    let tnun= document.getElementById ('txtnun')
    let tab= document.getElementById('seltab')
    
    if ( tnun.value.length == 0 ){
     res.innerHTML = 'Favor inserir valor valido.'
    } else {
        let nun = Number(tnun.value)
        let c = 1
        tab.innerHTML= ''
        while (c<= 10){
            let item = document.createElement('option')
            item.text = `${nun} x ${c} = ${nun*c}`
            tab.appendChild(item)
            c++
        }
        resposta.innerHTML= numero;
    }
}