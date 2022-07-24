from http.server import BaseHTTPRequestHandler
import requests
import json

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    req_url = 'https://www.tablofun.com/app/40/data/list/getAll'
    res=requests.get(req_url,timeout=5)
    data = json.loads(res.text, parse_float=str, parse_int=str)
    self.wfile.write(data['row'])
    return
