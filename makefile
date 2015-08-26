winkIP := 192.168.1.11
winkUser := root

deploy:
	grunt build
	scp dist/assets/main.js ${winkUser}@${winkIP}:/var/www/assets/main.js
	scp dist/index.html ${winkUser}@${winkIP}:/var/www/index.html
