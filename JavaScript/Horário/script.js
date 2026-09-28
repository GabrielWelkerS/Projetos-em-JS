//alert("Em construção!");

function carregar() {
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');
    const data = new Date();
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`;
        // BOM DIA
    if (hora >= 0 && hora < 12 ) {
        img.src = 'mor.png';
        document.body.style.background = '#e5b35c';
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'aft.png'
        document.body.style.background = '#bbcdd7';
    } else {
        // BOA NOITE
        img.src = 'nig.png'
        document.body.style.background = '#584133';
    }
}


