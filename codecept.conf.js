const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'test/*.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'D:/Documentos/FrameWork/Codeceptjs/cursoCodeceptjsMobile/app/app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        device: 'Pixel 2 API 29',
        platform: "10"
      }

    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js',
  },

  name: 'cursoCodeceptjsMobile'
}