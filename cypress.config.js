const { defineConfig } = require("cypress");
require("dotenv").config();
console.log(process.env);

module.exports = defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  chromeWebSecurity: false,
  videoUploadOnPasses: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 40000,
  responseTimeout: 40000,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  env: {
    
  },
  
  e2e: { 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: process.env.BASE_URL,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
  },
  });
