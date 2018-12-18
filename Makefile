fresh: ## clear out all node_modules and lock files, reinstall
	rm -rf packages/**/node_modules \
		&& rm -rf node_modules yarn.lock \
		&& yarn install

flow-typed: ## reinstall flow-types for packages
	rm -rf ./packages/**/flow-typed \
		&& yarn run -- lerna exec --concurrency 1 -- \
		npx flow-typed install --overwrite --packageDir ../../

license: ## copy license files to packages
	echo packages/** | xargs -n 1 cp LICENSE

# https://www.client9.com/self-documenting-makefiles/
help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)

.DEFAULT_GOAL: help

.PHONY: help fresh flow-typed license
