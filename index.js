function pagina() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //caso queira testar qualquer horario é só por  a linha 5 como comentario  e a linha 7 retirar do comentario. 
    //var hora = 20
    var minutos = data.getMinutes()
    nome = prompt('Informe seu nome')
    
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia ${nome}, agora são ${hora}:${minutos} horas da manhã.`
        img.src = 'manha.png'
        document.body.style.background = '#f2da90'
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde ${nome}, agora são ${hora}:${minutos} horas da tarde.`
        img.src = 'tarde.png'
        document.body.style.background = '#e5a065'
    } else {
        msg.innerHTML = `Boa noite ${nome}, agora são ${hora}:${minutos} horas da noite.`
        img.src = 'noite.png'
        document.body.style.background = '#0a191c'
        document.getElementById('hora').style.color = 'white'
    }
}