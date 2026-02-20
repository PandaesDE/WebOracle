pipeline {
    agent any

    environment {
        // Environment configurations
        DOCKER_COMPOSE_FILE = 'docker-compose.prod.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from your version control
                checkout scm
            }
        }

        stage('Build & Test Backend') {
            steps {
                dir('backend') {
                    // Ensures mvn wrapper is executable and runs tests
                    sh 'chmod +x mvnw'
                    sh './mvnw clean test'
                }
            }
        }

        stage('Build & Test Frontend') {
            tools {
                // Requires NodeJS plugin installed and configured in Jenkins Global Tool Configuration
                nodejs 'NodeJS 20' 
            }
            steps {
                dir('frontend') {
                    // Installs dependencies and runs an angular build
                    sh 'npm install'
                    sh 'npm run build --configuration=production'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                // Deploys or replaces application components using docker-compose
                // It builds the Dockerfiles specified in our docker-compose.prod.yml
                sh "docker compose -f ${DOCKER_COMPOSE_FILE} up -d --build"
            }
        }
    }

    post {
        always {
            // Clean workspace after build to preserve disk space
            cleanWs()
        }
        success {
            echo "Deployment Pipeline Succeeded! The Oracle is live."
        }
        failure {
            echo "Deployment Pipeline Failed. The stars are misaligned."
        }
    }
}
