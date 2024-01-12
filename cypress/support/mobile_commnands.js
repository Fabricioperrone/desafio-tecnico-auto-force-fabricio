const elementos = require('./elementos/elementos');

import urlAplicacao, { urlForm } from '../../urlAplicacao';
import elementos_mobile from '../e2e/mobile/elementos_mobile';
import('cypress-xpath')

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.Commands.add('menuSuspenso', () => {
   cy.xpath(elementos_mobile).should('be.visible')
})

Cypress.Commands.add('formAndSubmit', () => {

    cy.xpath(elementos.selecaoForm).should('be.visible')
    cy.xpath(elementos.formBTNOrdenar).click()
    cy.xpath(elementos.selecaoForm).click()
    cy.xpath(elementos.formMarcaSelecionada).should('be.visible')
    cy.xpath(elementos.formName).type('Osvaldo Martins')
    cy.xpath(elementos.formEmail).type('email@example.com')
    cy.xpath(elementos.formTelefone).type('51 999 999 999')
    cy.xpath(elementos.formCPF).type('931 544 841 14')
})
