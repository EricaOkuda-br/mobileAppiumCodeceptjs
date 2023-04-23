const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    password : '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  messagens:{
    notficationError: '~lognFail',
    failMessage : 'Erro no login!'
  },

  login(email, password) {
    I.wait(5)
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)
  
  },

  checkLoginError() {
    I.waitForElement(this.messagens.notficationError)
    I.waitForText(this.messagens.failMessage)
  }

  
}
