pipeline {
  agent {
	label 'agent-linux1'
	}
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./cypress2'
      sh '''
        npm install
	npm install serve
	serve -s build 
	'''
      }
    }
    stage ('test') {
      agent {
        label 'agent-linux2'
      }
      steps {
      sh ''' 
        npm install cypress
        npm install mocha
        npx cypress run --spec ./cypress/integration/test.spec.js
        '''
      }
      post {
        always {
          junit 'results/cypress-report.xml'
        }
          
      }
    }
  }
} 
