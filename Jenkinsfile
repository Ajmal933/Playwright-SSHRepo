pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Playwright_POM') {
                    bat 'npm install'
                    bat 'npx playwright install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                dir('Playwright_POM') {
                    bat 'npx playwright test tests/POM/Login.spec.js --project=chromium'
                }
            }
        }
    }
}
