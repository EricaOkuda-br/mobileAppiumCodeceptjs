Feature('login');
const { login_page} = inject()
const { home_page} = inject()

// BeforeSuite(() => {
//     console.log('Teste Suite - BeforeSuite')
// });

// Before(() => {
//     console.log('Teste com o log - Before')
// });

// AfterSuite(() => {
//     console.log('Teste Suite - AfterSuite')
// });

// After(() => {
//     console.log('Teste com o log - After')
// });

Scenario('Login com sucesso',  ({I}) => {
    login_page.login('teste@teste.com', '123456')
    I.waitForText('Search')
    home_page.checkBtnSave()

});

Scenario('Login invalido',  ({I}) => {
    login_page.login('tesste@teste.com', '0123456')
    login_page.checkLoginError()


});
