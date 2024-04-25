describe('example counter app', () => {
  beforeEach(() => {
    cy.visit('https://www.disco.re/');
    cy.get('#menu_btn').click();
  });

  it('로그인/로그아웃', () => {
    //로그인

    //given(준비)
    //when (사용자가 동작했을때)
    //then(이렇게 동작할것이다)

    if (cy.get('.sidebar-profile-name').should('have.value', '')) {
      cy.get('#sidebar_open_login_btn')
        .click()
        .then(() => {
          cy.get('#login_email').type('@@@@@');
          cy.get('#login_password').type('@@@');
          cy.wait(500);
          cy.get('.member-entry-submit-btn').click({
            multiple: true,
            force: true,
          });
        });
    } else {
      cy.get('#sidebar_logout_btn').click();
    }
  });
});
