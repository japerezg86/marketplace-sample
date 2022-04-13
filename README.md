# Marketplace Sample App #

## To build the entire project: ##
### Install Apache Maven ###
  * Download maven: https://maven.apache.org/download.cgi
  * Add maven PATH to environment variables: https://maven.apache.org/guides/getting-started/windows-prerequisites.html
  * Test with "mvn --version"
### From project root, run: "mvn clean install" ###
  * Note this pulls down npm dependencies, builds, tests, and packages static files into a zip for both projects
  * Every new build wipes away old buildable files to ensure you have the latest built files

## To test out the application: ##
1. Install Node and Yarn on you machine
2. cd to 'backend' dir
3. Run yarn install to pull down dependencies
4. Run yarn start (backend will run on localhost:3000 as detailed in https://github.com/japerezg86/marketplace-sample/tree/main/backend)
5. cd to 'frontend' dir
6. Run yarn install
7. Run yarn start (localhost:4000 https://github.com/japerezg86/marketplace-sample/tree/main/frontend)
8. This simple iteration of the app only gets a list of game items. No other features are available.
