
Feature('home');

const { login_page} = inject()
const { home_page} = inject()


Scenario('Criando cadastro',  ({I}) => {
    login_page.login('teste@teste.com', '123456')
    I.waitForText('Search')
    home_page.completCad()
    home_page.checkBtnSave()
   

   

});


