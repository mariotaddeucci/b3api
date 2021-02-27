import requests

def get_endpoint(endpoint):
    REST_API = 'https://b3api.vercel.app/api/'
    return '{}{}/'.format(REST_API, endpoint.strip('/'))

def get(ticker):
    url = get_endpoint('stocks') + ticker
    data = requests.get(url).json()
    return data

def getAll(tickers=[]):
    url = get_endpoint('stocks')
    params = {'tickers': tickers } if tickers else ''
    data = requests.get(url, params=params).json()
    return data
