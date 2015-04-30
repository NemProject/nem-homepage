from urllib2 import urlopen
from json import load

urlNEMBEX = 'http://nembex.nem.ninja/api/stats/nodes'
urlNEMBEX2 = 'http://nembex.nem.ninja/api/last-block'
urlPOLO = 'https://poloniex.com/public?command=returnTicker'

response = urlopen(urlNEMBEX2)
jsonHeight = load(response)
#add 10 blocks to account for NEMBEX lag
print int(jsonHeight['height']) + 10

response2 = urlopen(urlNEMBEX)
jsonNodes = load(response2)
nodeCounter = 0
for nodes in jsonNodes['nodes']:
    nodeCounter += 1
print(nodeCounter)

response3 = urlopen(urlPOLO)
jsonPrice = load(response3)
priceXEM = float(jsonPrice['BTC_XEM']['last'])
priceXEM *= 100000000 #100,000,000
print ("%.0f" % priceXEM)
