// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    viewport: { width: 1280, height: 720 },
  },
};

module.exports = config;