.PHONY: setup build deploy clean verify help

help: ## Show this help message
	@echo "SymGPT Deployment Commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

setup: ## Initial setup - install dependencies and create .env
	@echo "🔧 Setting up SymGPT..."
	npm install
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "⚠️  Created .env file - please fill in your Azure OpenAI credentials!"; \
	else \
		echo "✅ .env file already exists"; \
	fi

build: ## Compile frontend with custom SymGPT styling
	@echo "🏗️  Compiling frontend..."
	npm run frontend
	@echo "✅ Frontend compiled with SymGPT customizations"

deploy: build ## Build and start all Docker containers
	@echo "🚀 Deploying SymGPT..."
	docker-compose up -d
	@echo "✅ SymGPT started on http://localhost:3080"
	@echo ""
	@echo "🔍 Run 'make verify' to check if everything is working correctly"

clean: ## Stop containers and clean up
	@echo "🧹 Cleaning up..."
	docker-compose down
	docker system prune -f
	@echo "✅ Cleanup complete"

verify: ## Verify deployment is working correctly
	@echo "🔍 Verifying SymGPT deployment..."
	@echo ""
	@echo "Checking containers..."
	@if docker-compose ps | grep -q "Up"; then \
		echo "✅ Containers are running"; \
	else \
		echo "❌ Containers not running - run 'make deploy'"; \
		exit 1; \
	fi
	@echo ""
	@echo "Checking frontend accessibility..."
	@if curl -s http://localhost:3080 > /dev/null 2>&1; then \
		echo "✅ Frontend accessible at http://localhost:3080"; \
	else \
		echo "❌ Frontend not accessible"; \
		exit 1; \
	fi
	@echo ""
	@echo "Checking configuration files..."
	@if docker exec LibreChat test -f /app/librechat.yaml 2>/dev/null; then \
		echo "✅ librechat.yaml mounted correctly"; \
	else \
		echo "❌ librechat.yaml not mounted"; \
		exit 1; \
	fi
	@if docker exec LibreChat test -f /app/client/dist/index.html 2>/dev/null; then \
		echo "✅ Compiled frontend mounted correctly"; \
	else \
		echo "❌ Compiled frontend not mounted"; \
		exit 1; \
	fi
	@echo ""
	@echo "🎉 SymGPT deployment verified successfully!"
	@echo ""
	@echo "Manual verification checklist:"
	@echo "1. Visit http://localhost:3080"
	@echo "2. Check if SymGPT models appear in dropdown"
	@echo "3. Verify Symbis logos (not Azure logos)"
	@echo "4. Check footer shows 'SymGPT | Powered by Symbis'"
	@echo "5. Verify Symbis green/yellow styling on login page"

restart: ## Restart containers (useful after config changes)
	@echo "🔄 Restarting SymGPT..."
	docker-compose restart
	@echo "✅ SymGPT restarted"

logs: ## Show application logs
	docker-compose logs api --tail=20 --follow

status: ## Show container status
	docker-compose ps

quick-deploy: ## Quick deployment for development (skip npm install)
	@echo "⚡ Quick deploying SymGPT..."
	npm run frontend
	docker-compose up -d
	@echo "✅ SymGPT quick deployed on http://localhost:3080"

dev: ## Start in development mode with live reload
	@echo "🔧 Starting SymGPT in development mode..."
	npm run dev

check-files: ## Check if all required files exist
	@echo "📋 Checking required files..."
	@if [ -f "docker-compose.override.yml" ]; then \
		echo "✅ docker-compose.override.yml exists"; \
	else \
		echo "❌ docker-compose.override.yml missing"; \
		exit 1; \
	fi
	@if [ -f "librechat.yaml" ]; then \
		echo "✅ librechat.yaml exists"; \
	else \
		echo "❌ librechat.yaml missing"; \
		exit 1; \
	fi
	@if [ -f ".env" ]; then \
		echo "✅ .env exists"; \
	else \
		echo "❌ .env missing - run 'make setup'"; \
		exit 1; \
	fi
	@if [ -d "client/dist" ]; then \
		echo "✅ client/dist directory exists"; \
	else \
		echo "❌ client/dist missing - run 'make build'"; \
		exit 1; \
	fi
	@echo "✅ All required files present"