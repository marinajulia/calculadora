//valorTotal = (1-(Math.pow(1+porcentagemJuros),-meses)*prestacao)/porcentagemJuros


const pegandoDadosBotao = document.querySelector('[data-form-botao]')


const calcular = (evento) => {
    evento.preventDefault() 
    const pegandoDadosValorTotal = document.querySelector('[data-valor-total]')
    let valorTotal = pegandoDadosValorTotal.value
    const pegandoDadosMeses = document.querySelector('[data-valor-mensal]')
    const meses = pegandoDadosMeses.value
    const pegandoDadosJuros = document.querySelector('[data-valor-juros]')
    const juros = pegandoDadosJuros.value

    const porcentagemJuros = juros / 100


    const quantoFicou = valorTotal * Math.pow((1 + porcentagemJuros), meses)
    const mensal = quantoFicou / meses


    const tarefa = document.querySelector('[data-task]')
    const conteudo= `<p class="content">${quantoFicou} </p>`
    tarefa.innerHTML = conteudo

    const tarefa2 = document.querySelector('[data-task2]')
    const conteudo2= `<p class="content">${mensal}</p`
    tarefa2.innerHTML = conteudo2


}

pegandoDadosBotao.addEventListener('click', calcular)


