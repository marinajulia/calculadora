const pegandoDadosBotao = document.querySelector('[data-form-botao]')



const calcular =(evento)=>{
    const pegandoDadosValorTotal = document.querySelector('[data-valor-total]')
    let valorTotal = pegandoDadosValorTotal.value
    const pegandoDadosMeses = document.querySelector('[data-valor-mensal]')
    const meses = pegandoDadosMeses.value
    const pegandoDadosJuros = document.querySelector('[data-valor-juros]')
    const juros = pegandoDadosJuros.value
    const pegandoDadosValorPrestacao = document.querySelector('[data-valor-prestacao]')
    const prestacao = pegandoDadosValorPrestacao.value 

    const porcentagemJuros = juros/100

    //valorTotal = (1-(Math.pow(1+porcentagemJuros),meses)*prestacao)/porcentagemJuros

    const quantoFicou = valorTotal*Math.pow((1 + porcentagemJuros),meses)
    const mensal = quantoFicou/meses

    console.log("total que vai pagar ",quantoFicou)
    console.log("mensal ",mensal)
    


}

pegandoDadosBotao.addEventListener('click', calcular)


