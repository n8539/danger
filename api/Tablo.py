from http.server import BaseHTTPRequestHandler
from datetime import datetime
import requests
import json

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    # req_url = 'https://www.tablofun.com/app/40/data/list/getAll'
    # res=requests.get(req_url,timeout=5)
    # data = json.loads(res.text, parse_float=str, parse_int=str)
    self.wfile.write(str(datetime.now().strftime('%Y-%m-%d %H:%M:%S')).encode())
    return

# def req():
#     req_url = 'https://www.tablofun.com/app/40/data/list/getAll'
#     res=requests.get(req_url,timeout=5)
#     data = json.loads(res.text, parse_float=str, parse_int=str)
#     print(data['rows'])

# req()