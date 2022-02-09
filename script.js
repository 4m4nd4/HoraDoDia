function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    msg.innerHTML = `${hora}`

    if (hora >= '00:00' && hora < '12:00') {
        //BOM DIA!
        img.src = 'diafoto.png'
        document.body.style.background = '#F6D473'
    } else if (hora >= '12:00' && hora <= '18:00') {
        //BOA TARDE!
        img.src = 'tardefoto.png'
        document.body.style.background = '#FDA02B'
    } else {
        //BOA NOITE!
        img.src = 'noitefoto.png'
        document.body.style.background = '#5D7E85'
    }
}

const tempo = setInterval(carregar, 1000)