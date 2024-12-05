const url = "https://servicodados.ibge.gov.br/api/v3/agregados/86/periodos/199407|199408|199409|199410|199411|199412/variaveis/103?localidades=N1[all]&classificacao=72[2640]"

async function visualizarDados(){
  const res = await fetch(url)
  const dados = await res.json()
  região = 0
  tipo_dados = (dados[0]['variavel'])
  console.log(tipo_dados)
  resultado_dados = (dados[0]['resultados'][0]["series"][0]["serie"])
  
  let ano = Object.keys(resultado_dados)
  let valor = Object.values(resultado_dados)
  
  console.log(ano[0].slice(0,4))

  const paragrafo = document.createElement('p')
  paragrafo.classList.add("graficos--container__texto")
  paragrafo.innerHTML = `No ano de ${ano[0].slice(0,4)} foi obtido um valor de ${valor[0]}. `
  paragrafo.innerHTML += `Esta é uma análise de Índice de Preços ao Consumidor em Real.`
  console.log(paragrafo)

  const container = document.getElementById('graficos--container')

  container.appendChild(paragrafo)
}

visualizarDados()