const elementos = require("../../support/elementos/elementos");

describe('Testes na Página Principal', () => {
  beforeEach(() => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');
  });
  it('Validação do Carrossel de Banners', () => {
    // Verificar se o carrossel está visível
    cy.validaçaoCarrosselBanners()
  });
  it('verifica o titulo da aplicação', () => {
    cy.title().should('be.equal', 'BMW é na Dealer BMW (Desafio QA)')
  })
  it('verifica btn "mensgem"', () => {
    cy.get(':nth-child(2) > .btn').click()
    cy.get('#header-card-phones > :nth-child(1) > .card-collapse__header').should('be.visible')
    cy.açãoBTNMensagem()
  })
  it('verifica btn "whatsapp"', () => {
    cy.get(':nth-child(3) > .btn').should('be.visible')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('#header-card-whatsapp > .header__card-phones-items > .card-collapse__header').click()
    cy.get('#wpp-content-0 > .list > .header__card-whatsapp-item').should('be.visible')
  })
  it('Validação dos Cards de Ofertas', () => {
      cy.validaçaoCardOfertas()
    });
    it('Validação do Botão "Ordenar"', () => {
      cy.BotãoOrdenar()
    });
    it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.formAndSubmit()

    cy.get(':nth-child(2) > .form-check > :nth-child(1) > .checkable').click()
    cy.get(':nth-child(3) > :nth-child(3) > .custom-check > .checkable').click()
    cy.get('.form-conversion__body > .btn').click()
    cy.xpath(elementos.successfully).should('have.text', 'Solicitação realizada com sucesso!')
    });
    it('verifica rodape da aplicação "SP"', () => {
      cy.AutoDealerSP()
    })
    it('verifica rodapé da aplicação "Natal"', () => {
      cy.AutoDealerNatal()
    })
    it('verifica dados institucionais matriz SP (cnpj, end, razão social)', () => {
      cy.dadosInstitucionaisSP()
    })
    it('verifica dados institucionais Natal (cnpj, end, razão social)', () => {
      cy.dadosInstitucionaisFilialNatal()
    })
  });
