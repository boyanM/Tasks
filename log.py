#!/usr/bin/python3

import cgi,cgitb
from passlib.hash import pbkdf2_sha256
import psycopg2

form = cgi.FieldStorage()

user = form.getvalue('uname')

password = form.getvalue('psw')


def searchInDB(user,psw):
	result = False
	try:
		connection = psycopg2.connect(dbname="wordpress",
		user="wpuser",
		password="password",
		host="127.0.0.1",
		port="5432")

		cursor = connection.cursor()


		cursor.execute("select password from customers \
			where (email='%s' or username = '%s');"%(user,user))
		search = cursor.fetchone()
	
		if pbkdf2_sha256.verify(password,search[0]):
			result = True

	except (Exception,psycopg2.Error) as error:
		print('Error while connecting to PostgreSQL:',error)
	
	finally:
		if connection:
			cursor.close()
			connection.close()
		return result

	
if searchInDB(user,password) == 1:
		print("""Content-type:text/html\r\n\r\n
<html>
<head>
</head>
	<body>
		<p>Welcome to yout account :)</p>
	</body>
</html>""")
else:
	error = "Invalid Username or Password"
	print("""Content-type:text/html\r\n\r\n
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="../login.css">

</head>
<body>
<div>
<h2>Login Form</h2>
<div id="error">%s</div>
<form action="login.py" method="post">
  <div class="container">
    <label for="uname"><b>Username or E-mail</b></label>
    <input type="text" placeholder="Enter Username" name="uname" value="%s" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <a class = "acc" href="index.html">Create account</a></span>
    <a class = "psw" href="#">Forgot password?</a></span>
  </div>
</form>

</body>
</html>"""%(error,user))

