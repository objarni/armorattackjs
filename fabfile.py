from fabric.api import lcd

import os
import ftplib
import webbrowser
import SimpleHTTPServer
import SocketServer

src_path = '/home/olof/prj/github/armorattackjs/src/'
index_html = os.path.join(src_path, 'index.html')


def deploy():
    user = os.environ['AA_USER']
    pw = os.environ['AA_PW']
    ftp = os.environ['AA_FTPURL']
    print 'Opening FTP session.'
    session = ftplib.FTP(ftp, user, pw)
    for name in os.listdir(src_path):
        path = os.path.join(src_path, name)
        f = open(path, 'rb')
        print 'Storing %s on remote server.' % name
        session.storbinary('STOR %s' % name, f)
        f.close()
    session.quit()


def run():
    with lcd(src_path):
        PORT = 7777
        Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
        SocketServer.TCPServer.allow_reuse_address = True
        httpd = SocketServer.TCPServer(("", PORT), Handler)
        print "Armour Attack JS served at port", PORT
        webbrowser.open('http://localhost:%d/src' % PORT)
        httpd.serve_forever()
