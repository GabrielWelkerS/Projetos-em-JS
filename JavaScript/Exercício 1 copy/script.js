function verificar() {

    const data = new Date()
    const ano = data.getFullYear()

    const fano = document.getElementById('txtano')
    const res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert("[ERRO] Verifique os dados e tente novamente!")

    } else {

        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)

        let genero = ''

        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            genero = 'Homem'

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'childhe.png')

            } else if (idade < 21) {

                img.setAttribute('src', 'boy.png')

            } else if (idade < 50) {

                img.setAttribute('src', 'mean.png')

            } else {

                img.setAttribute('src', 'vô.png')
            }

        } else if (fsex[1].checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'childshe.png')

            } else if (idade < 21) {

                img.setAttribute('src', 'girl.png')

            } else if (idade < 50) {

                img.setAttribute('src', 'woman.png')

            } else {

                img.setAttribute('src', 'vó.png')
            }
        }

        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    }
}