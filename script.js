function carregar() {
    var horario = window.document.getElementById('horario')
    var msg = window.document.getElementById('msg-periodo')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    min = checkTime(min);
    sec = checkTime(sec);

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<h1>Bom Dia!!!</h1>`
        img.src = 'img/Manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        msg.innerHTML = `<h1>Boa Tarde!!!</h1>`
        img.src = 'img/Tarde.png'
        document.body.style.background = '#c27e6d'
    } else {
        msg.innerHTML = `<h1>Boa Noite!!!</h1>`
        img.src = 'img/Noite.png'
        document.body.style.background = '#415764'
    }
    
    horario.innerHTML = `<h1>Horário: <span  id="periodo"> ${hora}:${min}:${sec} </span></h1>`
    setTimeout('carregar()',500);
}

function checkTime(i) {
    if (i < 10) {
        i += "0";
    }
    return i;
}
    