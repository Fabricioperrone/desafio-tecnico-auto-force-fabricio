const elementos = require("../../support/elementos/elementos");
const elementos_mobile = require("./elementos_mobile");

describe('Testes na Página Principal', () => {
  beforeEach(() => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');
  });
  it('verifica o titulo da aplicação', () => {
    cy.title().should('be.equal', 'BMW é na Dealer BMW (Desafio QA)')
  })
  it('Validação do Carrossel de Banners Apenas imagens', () => {
    // Verificar se o carrossel está visível
    cy.get('.slide__image').should('be.visible')
  });
  it('verifica cards de ofertas', () => {
    cy.get(':nth-child(1) > a > .list-vehicles-land__item > .card-land__title')
      .should('be.visible')
      .should('have.text', 'Z4 2022')
    cy.get(':nth-child(1) > a > .list-vehicles-land__item > .card-land__image')
      .should('be.visible')
    cy.get('.list-vehicles-land__title > span')
      .should('be.visible')
      .should('have.text', 'Ofertas exclusivas Dealer BMW (Desafio QA)')
    cy.get(':nth-child(1) > a > .list-vehicles-land__item > .card-land__price')
      .should('be.visible')
      .should('have.text', 'Entrada de R$ 55.000,00+ 86x de R$ 2.500,00')
    cy.get(':nth-child(1) > a > .list-vehicles-land__item > .btn')
      .should('be.visible')
      .click()
  })
  it.only('verifica fluxo de página de contato', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/novos/z4-2022')

    cy.get('.showcase__select-variants > :nth-child(2) > .choices > .choices__inner > .choices__list > .choices__item')
      .click()
    cy.xpath(elementos_mobile.btnOrdenar).click()
    cy.get('.d-block > .button--primary')
      .should('be.visible')
      .click()
    cy.formAndSubmit()
    //cy.get(':nth-child(6) > :nth-child(2) > .choices > .choices__inner > .choices__list').click()
    //cy.xpath(elementos_mobile.unidade).click()
    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click()
    cy.get(':nth-child(3) > :nth-child(3) > .custom-check > .checkable').click()
    cy.get('.form-conversion__body > .btn').should('be.visible')
      .click()
    cy.xpath(elementos_mobile.message)
      .should('have.text', 'Solicitação realizada com sucesso!')
    
  })
});
