APP_NAME = react-grunt-repo
PORT ?= 4477

NBIN = ./node_modules/.bin

export NODE_ENV ?= development

export PATH := $(NBIN):$(PATH)


# Setup path to log directory
ifeq ($(NODE_ENV), production)
	LOGDIR = /var/log/node/$(APP_NAME)
else
	LOGDIR = logs
endif

setup:
	@npm install
	@make build

build: 
	@mkdir -p ./$(LOGDIR)
	@mkdir -p ./public/stylesheets ./public/javascripts/ ./public/images
	@test -f $(NBIN)/grunt && $(NBIN)/grunt build || grunt build
	
dev:
	@echo Starting dev server...
	@test -f $(NBIN)/grunt && NODE_ENV=development $(NBIN)/grunt || NODE_ENV=development grunt 

clean:
	@rm -rf ./public/stylesheets
	@rm -rf ./public/javascripts
	@rm -rf ./public/images
	@rm -rf ./dist

test:
	@echo tests are yet to be written... :(

cdn:
	
.PHONY: setup build test clean templates cdn

