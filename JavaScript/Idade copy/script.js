function contar() {

    let g1 = document.getElementById('gini')
    let g2 = document.getElementById('gfim')
    let g3 = document.getElementById('gsal')
    let res = document.getElementById('res')

    if (g1.value.length == 0 || g2.value.length == 0 || g3.value.length == 0) {

        res.innerHTML = 'Impossível contar!'

    } else {

        res.innerHTML = 'Contando: <br>'

        let k = Number(g1.value)
        let l = Number(g2.value)
        let m = Number(g3.value)

        if (m <= 0) {
            window.alert('Salto inválido! Considerando PASSO 1')
            m = 1
        }

        if (k < l) {

            // Contagem crescente
            for (let g = k; g <= l; g += m) {
                res.innerHTML += `${g} 👉 `
            }

        } else {

            // Contagem regressiva
            for (let g = k; g >= l; g -= m) {
                res.innerHTML += `${g} 👈 `
            }
        }

        res.innerHTML += ` 🏁`
    }
}