import { defineConfig } from 'cypress'
import cypressCodeCoverageTask from '@cypress/code-coverage/task'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    setupNodeEvents(on, config) {
      cypressCodeCoverageTask(on, config);
      return config;
    }
  }
});
