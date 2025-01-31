describe('test_name', function() {

   it('what_it_does', function() {

      cy.viewport(1881, 984)

      cy.visit("http://185.222.61.150:8081/gaya/public/index.html#/login")

      cy.server()
      cy.route('/gaya/api/platforms/info/*').as('getPlatform').its('status').should('eq', 200)
      cy.wait('@getPlatform')

      var postfix = Cypress.env('postfix')

      cy.get('.row > .form-container > #login-form > .form-group > #login-email').click()
      cy.get('.row > .form-container > #login-form > .form-group > #login-email').type("klawr1@assist1.phcvip.com")
      cy.get('.row > .form-container > #login-form > .form-group > #login-password').type('123456')
      cy.get('.form-container > #login-form > .row > .pull-left > #ButtonTheme').click()
      cy.server()
      cy.route('/gaya/api/campaignsLight/select2').as('login').its('status').should('eq', 200)
      cy.wait('@login')
      cy.wait(5000)
      cy.get('.input-group:nth-child(2) > #keyPadId > .btn-key-pad > .fa-stack > .fa-caret-down').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(11)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(1)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(7)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(11)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(7)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(11)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(2)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(5)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(11)').click()

      cy.get('.input-group > #keyPadId > #dropdownKeyPad > .buttons-key-pad > .button-key-pad:nth-child(11)').click()

      cy.get('.buttons-key-pad > .row > .col-sm-4 > #callOutPhone > .txt-color-gray').click()

      cy.wait(10000)
      cy.get('.right-side-container > #headerMenuProfil > .dropdown > .dropdown-toggle > .name').click()

      cy.get('#headerMenuProfil > .dropdown > .dropdown-menu > #logout2 > .fa-main-color-line').click()

      cy.get('#MsgBoxBack > #Msg1 > .MessageBoxMiddle > .MessageBoxButtonSection > #bot1-Msg1').click()


   })

})