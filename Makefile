build:
	docker compose build
up:
	docker compose up
up-build:
	docker compose up --build
down:
	docker compose down
up-prod:
	docker compose -f docker-compose.prod.yml up
# docker-compose -f docker-compose.prod.yml up -d
build-prod:
	docker compose -f docker-compose.prod.yml build
down-prod:
	docker compose -f docker-compose.prod.yml down
