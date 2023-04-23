const { I } = inject();

module.exports = {

  save: {
    btnSave: '~salvar',
  
  },

  inputs: {
    inputCod: '~codigo',
    inputAluno: '~aluno',
    search:'~search'
  },

  checkBtnSave() {
    I.waitForElement(this.save.btnSave)
    I.seeElement(this.save.btnSave)
  },

  completCad() {
    I.fillField(this.inputs.inputCod, 253)
    I.fillField(this.inputs.inputAluno, 'MacoPolo')
  }
  
}
