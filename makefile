deploy:
	grunt build
	scp dist/assets/main.js root@192.168.1.11:/var/www/assets/main.js
	scp dist/index.html root@192.168.1.11:/var/www/index.html
