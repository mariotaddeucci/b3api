# B3Api 💰 - Python
Essa é uma biblioteca gratuita e não oficial para buscar de ativos listados na bolsa de valores B3.

### Objeto Asset:
- **ticker**: o código da ação referente ao título em questão.
- **price**: A cotação de preços com até 15 minutos de atraso.
- **priceopen**: preço no início do pregão.
- **high**: Preço da alta no dia atual.
- **low**:  Preço da baixa no dia atual.
- **volume**: O volume de negociações do dia atual.
- **marketcap**: O valor de mercado das ações.
- **tradetime**: o horário da última negociação.
- **volumeavg**: o volume médio diário de negociações.
- **pe**: A relação preço/lucro.
- **eps**: Os ganhos por ação.
- **high52**: Preço da alta em 52 semanas.
- **low52**: Preço da baixa em 52 semanas.
- **change**: A alteração de preço desde o fechamento do pregão anterior.
- **changepct**: A variação percentual de preço desde o pregão anterior.
- **closeyest**: Preço de fechamento do dia anterior.
- **shares**: O número de ações em circulação.

## Instalação:

    pip install b3api

## Utilizando a biblioteca em código 

### Lista de ativos

	import b3api
	data = b3api.assets.getAll()
	print(data)

#### Resultado

    [
	    {
	        "price": 55.65,
	        "priceopen": 56,
	        "high": 56.8,
	        "low": 55.5,
	        "volume": 21,
	        "marketcap": 10527740960,
	        "tradetime": "2021-02-25T19:56:00.000Z",
	        "volumeavg": 2567,
	        "pe": null,
	        "eps": null,
	        "high52": 224.55,
	        "low52": 47.95,
	        "change": -0.35,
	        "changepct": -0.62,
	        "closeyest": 56,
	        "shares": 65524420,
	        "ticker": "A1AP34"
	    },
		{ ... },
		{ ... },
		{ ... },
		...
	]
	
### Lista filtrada de ativos

	import b3api
	data = b3api.assets.getAll(['ITSA4', 'BBDC4'])
	print(data)
#### Resultado
    [
	    {
	        "price": 23.44,
	        "priceopen": 23.94,
	        "high": 24.22,
	        "low": 23.34,
	        "volume": 35839300,
	        "marketcap": 195661911897,
	        "tradetime": "2021-02-25T21:09:00.000Z",
	        "volumeavg": 40622097,
	        "pe": 12.97,
	        "eps": 1.81,
	        "high52": 28.41,
	        "low52": 15.73,
	        "change": -0.57,
	        "changepct": -2.37,
	        "closeyest": 24.01,
	        "shares": 4435106111,
	        "ticker": "BBDC4"
	    },
	    {
	        "price": 10.08,
	        "priceopen": 10.43,
	        "high": 10.52,
	        "low": 10.06,
	        "volume": 49216800,
	        "marketcap": 87074264940,
	        "tradetime": "2021-02-25T21:12:39.000Z",
	        "volumeavg": 30075547,
	        "pe": 12.02,
	        "eps": 0.84,
	        "high52": 12.39,
	        "low52": 7.44,
	        "change": -0.34,
	        "changepct": -3.26,
	        "closeyest": 10.42,
	        "shares": 5520977160,
	        "ticker": "ITSA4"
	    }
	]

### Buscar um ativo especifico

	import b3api
	data = b3api.assets.get('itsa4')
	print(data)
#### Resultado
    {
	    "price": 10.08,
	    "priceopen": 10.43,
	    "high": 10.52,
	    "low": 10.06,
	    "volume": 49216800,
	    "marketcap": 87074264940,
	    "tradetime": "2021-02-25T21:12:39.000Z",
	    "volumeavg": 30075547,
	    "pe": 12.02,
	    "eps": 0.84,
	    "high52": 12.39,
	    "low52": 7.44,
	    "change": -0.34,
	    "changepct": -3.26,
	    "closeyest": 10.42,
	    "shares": 5520977160,
	    "ticker": "ITSA4"
	}

###  Buscar um ativo inválido 

	import b3api
	data = b3api.assets.get('InvalidTicker')
	print(data)

#### Resultado
    {
	    "status": 404,
	    "reason": "Not found"
	}

## Utilizando a biblioteca via CLI 

### Parâmetros:
- **-o** ou **--output**: nome do arquivo que será gerado com as solicitadas. Default: output.json
- args: ativos específicos que serão buscados

### Exemplos

####  Retorna todos os ativos para o arquivo output.json
	python -m b3api 

####  Retorna todos os ativos para o arquivo data.json
	python -m b3api -o data.json

####  Retorna os ativos ITSA4 e BBDC4 para o arquivo data.json
	python -m b3api -o data.json BBDC4 ITSA4

## Exoneração de responsabilidade

Todos os dados e informações são fornecidos "no estado em que se encontram" somente para fins informativos, e não para fins de negociação ou recomendação sobre investimentos, tributos, questões jurídicas, financeiras ou outros assuntos. Consulte seu corretor ou representante financeiro para verificar os preços antes de executar qualquer negociação. Os dados e as informações não constituem orientações sobre investimentos nem uma recomendação ou solicitação nossas para comprar, vender ou reter títulos ou produtos financeiros.
Os dados e as informações não constituem orientações sobre investimentos (sejam gerais ou personalizadas). Talvez as operações ou os produtos financeiros mencionados nos dados e informações não sejam adequados aos seus objetivos ou expectativas e perfil de investimento. É de sua responsabilidade considerar se esses produtos ou operações são adequados para você com base nos seus interesses, objetivos, horizonte de investimento e apetite ao risco. Não nos responsabilizamos por quaisquer danos decorrentes de operações ou investimentos em produtos financeiros referidos aqui. Não recomendamos usar os dados e informações fornecidos como a única base para tomada de decisões de investimento.
Os dados são fornecidos por bolsas de valores e outros provedores de conteúdo e podem ter atraso conforme especificado pelas próprias bolsas ou provedores de dados.
