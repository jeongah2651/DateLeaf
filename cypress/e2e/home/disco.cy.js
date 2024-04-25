describe('example counter app', () => {
  beforeEach(() => {
    cy.visit('https://www.disco.re/');
    cy.get('.disco-welcome-close-icon').click();
    cy.get('#menu_btn').click();
    
  });

  it('로그인/로그아웃', () => {
    //로그인

    //given(준비)
    //when (사용자가 동작했을때)
    //then(이렇게 동작할것이다)

    if (cy.get('#sidebar_open_login_btn').should('have.value', '')) {
        // 첫 번째 명령 체인: 로그인 버튼을 클릭하기 위한 조건 확인
        cy.get('.sidebar-profile-name').should('have.value', '').then((profileName) => {
            if (profileName) {  // 이 조건은 사실상 항상 참이므로, 로직을 확인해야 함
            // eslint-disable-next-line cypress/unsafe-to-chain-command
            cy.get('#sidebar_open_login_btn').click().then(() => {
                cy.get('#login_email').type('testjalee2651@gmail.com');
                cy.get('#login_password').type('gkdgo123!');
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(500); // wait 사용은 가능한 피하는 것이 좋습니다. 대신 요소가 준비될 때까지 기다리는 로직 사용
                cy.get('.member-entry-submit-btn').click({ multiple: true, force: true });
            });
            }
        });
  
    } else {
      cy.get('#sidebar_logout_btn').click();
    }
  });
});
