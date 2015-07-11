import os
import ftplib
import webbrowser

index_html = '/home/olof/prj/github/armorattackjs/src/index.html'


def deploy():
	user = os.environ['AA_USER']
	pw = os.environ['AA_PW']
	ftp = os.environ['AA_FTPURL']
	print 'Opening FTP session.'
	session = ftplib.FTP(ftp, user, pw)
	file = open(index_html,'rb')
	print 'Storing file(s) on remote server.'
	session.storbinary('STOR index.html', file)
	file.close()
	session.quit()


def run():
	webbrowser.open(index_html)