const elementos = require('./elementos/elementos');

import urlAplicacao, { urlForm } from '../../urlAplicacao';
import('cypress-xpath')

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.Commands.add('validaçaoCarrosselBanners', () => { 
    cy.xpath(elementos.bannerCarrosel).should('be.visible')
    cy.xpath(elementos.midiaCarrosel).should('have.length.greaterThan', 0);
    cy.xpath(elementos.setacCarrosel).click();
})

Cypress.Commands.add('validaçaoCardOfertas', () => { 
     cy.xpath(elementos.cardOfertas).should('be.visible')
     cy.xpath(elementos.titleCard).should('be.visible')
     cy.xpath(elementos.imagemMiniatura).should('be.visible')
     cy.xpath(elementos.btn_saibaMais).click()
})

Cypress.Commands.add('BotãoOrdenar', () => {

    cy.visit(urlForm)

    cy.xpath(elementos.btnOrdenar).should('be.visible')
    cy.xpath(elementos.btnOrdenar).click()
    cy.xpath(elementos.selecaoCarro).click()
    cy.xpath(elementos.CarroSelecionado).should('be.visible')
    cy.xpath(elementos.precoCarro).should('be.visible')
})

Cypress.Commands.add('formAndSubmit', () => {

    cy.visit(urlForm)

    cy.xpath(elementos.selecaoForm).should('be.visible')
    cy.xpath(elementos.formBTNOrdenar).click()
    cy.xpath(elementos.selecaoForm).click()
    cy.xpath(elementos.formMarcaSelecionada).should('be.visible')
    cy.xpath(elementos.formName).type('Osvaldo Martins')
    cy.xpath(elementos.formEmail).type('email@example.com')
    cy.xpath(elementos.formTelefone).type('51 999 999 999')
    cy.xpath(elementos.formCPF).type('931 544 841 14')
})

Cypress.Commands.add('açãoBTNMensagem', () => {
    cy.xpath(elementos.BTN_mensagem).should('be.visible')
    cy.get('#header-card-phones > :nth-child(1) > .card-collapse__header').click()
    cy.get('#header-card-phones > :nth-child(1) > .card-collapse__header').should('be.visible')
    cy.get('#header-card-phones > :nth-child(2) > .card-collapse__header > .icon').click()
    cy.get('#header-card-phones > :nth-child(2) > .card-collapse__header > .icon').should('be.visible')
    cy.get(':nth-child(3) > .btn').should('be.visible')
    cy.get(':nth-child(3) > .btn').click()
    cy.get(':nth-child(3) > .btn').should('be.visible')
    cy.get(':nth-child(3) > .btn').click()
})

Cypress.Commands.add('AutoDealerSP', () => {
  cy.xpath(elementos.rodape).should('be.visible', ' AutoDealer São Paulo ')
  cy.xpath(elementos.rodape).should('have.text', ' AutoDealer São Paulo ')
  cy.xpath(elementos.endereco).should('be.visible')
  cy.xpath(elementos.endereco).should('have.text', ' Endereço: ')
  cy.xpath(elementos.rua).should('be.visible')
  cy.xpath(elementos.rua).should('have.text', 'Rua vergueiro , 2253 - Trend Paulista, Sala 115 - Vila Mariana - São Paulo-SP')
  cy.xpath(elementos.atendimento).should('be.visible')
  cy.xpath(elementos.atendimento).should('have.text', ' Horários de Funcionamento: ')
  cy.xpath(elementos.showroom).should('be.visible')
  cy.xpath(elementos.showroom).should('have.text', 'Showroom:  Segunda a Sexta das 8h às 18h. Sábado das 8h às 12h.')
  cy.xpath(elementos.oficina).should('be.visible')
  cy.xpath(elementos.oficina).should('have.text', 'Oficina:  Segunda a Sexta das 8h às 17h. Sábado das 8h às 12h.')
  cy.xpath(elementos.pos_venda).should('be.visible')
  cy.xpath(elementos.pos_venda).should('have.text', 'Pós-Venda:  Segunda a sexta das 8h às 12h')
})

Cypress.Commands.add('AutoDealerNatal', () => {
  cy.get('.footer-land-units__sidebar > .footer-land-units__nav > :nth-child(2) > .nav-vertical__link > .icon').click()
  cy.xpath(elementos.filialNatal).should('be.visible')
  cy.xpath(elementos.filialNatal).should('have.text', ' AutoDealer Natal ')
  cy.xpath(elementos.enderecoNatal).should('be.visible')
  cy.xpath(elementos.enderecoNatal).should('have.text', ' Endereço: ')
  cy.xpath(elementos.ruaFilialNatal).should('be.visible')
  cy.xpath(elementos.ruaFilialNatal).should('have.text', 'Av. Amintas Barros, 3700 - Torre Business - Sala 2506 - Lagoa Nova - Natal-RN')
  cy.xpath(elementos.atendimentoFilialNatal).should('be.visible')
  cy.xpath(elementos.atendimentoFilialNatal).should('have.text', ' Horários de Funcionamento: ')
  cy.xpath(elementos.showroomFilialNatal).should('be.visible')
  cy.xpath(elementos.showroomFilialNatal).should('have.text', 'Showroom:  Segunda a Sexta das 8h às 17h. Sábado das 8h às 10h.')
  cy.xpath(elementos.oficinaFilialNatal).should('be.visible')
  cy.xpath(elementos.oficinaFilialNatal).should('have.text', 'Oficina:  Segunda a Sexta das 8h às 18h. Sábado das 8h às 12h.')
})
Cypress.Commands.add('dadosInstitucionaisSP', () => {
  cy.xpath(elementos.cnpjSP).should('be.visible')
  cy.xpath(elementos.cnpjSP).should('have.text', 'CNPJ: 22.588.947/0001-06 ')
  cy.xpath(elementos.enderecoMatrizSP).should('be.visible')
  cy.xpath(elementos.enderecoMatrizSP).should('have.text', 'Endereço Matriz: Av. Amintas Barros, 3700, Torre Business, Sala 2503 - Lagoa Nova, Natal - RN, CEP: 59075-250 ')
  cy.xpath(elementos.razaoSocialSP).should('be.visible')
  cy.xpath(elementos.razaoSocialSP).should('have.text', 'Razão Social: AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA ')
})

Cypress.Commands.add('dadosInstitucionaisFilialNatal', () => {
  cy.get('.footer-land-units__sidebar > .footer-land-units__nav > :nth-child(2) > .nav-vertical__link > .icon').click()
  cy.xpath(elementos.cnpjNatal).should('be.visible')
  cy.xpath(elementos.cnpjNatal).should('have.text', 'CNPJ: 22.588.947/0001-06 ')
  cy.xpath(elementos.enderecoFilialNatal).should('be.visible')
  cy.xpath(elementos.enderecoFilialNatal).should('have.text', 'Endereço Matriz: Av. Amintas Barros, 3700, Torre Business, Sala 2503 - Lagoa Nova, Natal - RN, CEP: 59075-250 ')
  cy.xpath(elementos.razaoSocialNatal).should('be.visible')
  cy.xpath(elementos.razaoSocialNatal).should('have.text', 'Razão Social: AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA ')
})