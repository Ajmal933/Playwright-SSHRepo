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

post {
    always {
        emailext(
            to: 'ajmal933@gmail.com',
            subject: "Jenkins Build - ${currentBuild.currentResult}",
            body: """
            Job: ${env.JOB_NAME}
            Build Number: ${env.BUILD_NUMBER}
            Status: ${currentBuild.currentResult}
            URL: ${env.BUILD_URL}
            """
        )
    }
}