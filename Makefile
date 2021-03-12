.PHONY: dev_django
dev_django:
	docker-compose -f infra/docker-compose.yml up $(COMMAND_ARGS)

.PHONY: dev_django_down
dev_django_down:
	docker-compose -f infra/docker-compose.yml down

.PHONY: dev_nuxt
dev_nuxt:
	cd web/ && yarn && yarn run dev

.PHONY: yarn
yarn:
	cd web/ && yarn $(COMMAND_ARGS)

.PHONY: psql
psql:
	docker exec -it django_postgres psql -U django

.PHONY: bash
bash:
	docker exec -it django_api /bin/bash

.PHONY: shell
shell:
	docker-compose -f infra/docker-compose.yml run --rm api python manage.py shell_plus --print-sql --ipython $(COMMAND_ARGS)

.PHONY: makemigrations
makemigrations:
	docker-compose -f infra/docker-compose.yml run --rm api python manage.py makemigrations $(COMMAND_ARGS)

.PHONY: migrate
migrate:
	docker-compose -f infra/docker-compose.yml run --rm api python manage.py migrate $(COMMAND_ARGS)

.PHONY: test
test:
	docker-compose -f infra/docker-compose.yml run --rm api tox -e black -e pytest $(COMMAND_ARGS)

.PHONY: generate
generate: generate_spec

.PHONY: generate_spec
generate_spec:
	cd web/ && yarn run generate:spec
