#!/usr/bin/env python
# -*- coding: utf-8 -*- 
import tornado.auth
import tornado.web
import tornado.httpserver 
import tornado.ioloop 
import tornado.options 
import os.path
import time
from urllib2 import urlopen
from json import load
import ujson

from tornado.options import define, options

define("port", default=1337, help="run on the given port", type=int)

class StatsHandler(tornado.web.RequestHandler):
	def get(self):

		output = []

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

		output.append(nodeCounter, priceXEM)

		self.write(ujson.dumps(output))
		self.finish()

if __name__ == '__main__': 

	tornado.options.parse_command_line()

	settings = {
		"cookie_secret": "UTqJTYAqQPeeyracxL6HP57q8QnDWUv2q28SSoFQqaE=", 
		"xsrf_cookies": True,
		"debug": False,
		"gzip": True,
	}

	app = tornado.web.Application(
		[
		 (r'/', StatsHandler),
		], 
		**settings
	)

	server = tornado.httpserver.HTTPServer(app) 
	server.listen(options.port) 
	tornado.ioloop.IOLoop.instance().start()








