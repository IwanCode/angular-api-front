define app_ip
$$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' angular_md_front_app)
endef

build_image:
	docker build -t angular-cli-python:2.0 .

up:
	docker run -d -v $$(pwd)/:/app --name angular_md_front_app angular-cli-python:2.0 sh -c "cd /app && npm install && ng serve --host 0.0.0.0 --disable-host-check"

start:
	docker start angular_md_front_app

stop:
	docker stop angular_md_front_app

restart: stop start

set_host:
	sudo sed -i '/angular-md-front.test/d' /etc/hosts
	echo "$(call app_ip)" angular-md-front.test | sudo tee --append /etc/hosts


single:
	docker run --rm -v$(PWD)/:/app --name angular_md_front_app_single angular-cli-python:2.0 sh -c "cd /app && npm install && ng serve --host 0.0.0.0"


init_new_bash:
	docker run --rm -it -v$(PWD)/:/app --name angular_shitty angular-cli-python:2.0 sh