winkUser := root

deploy:
	grunt build
	scp dist/assets/main.js ${winkUser}@$(WINK_IP_ADDRESS):/var/www/assets/main.js
	scp dist/index.html ${winkUser}@$(WINK_IP_ADDRESS):/var/www/index.html
