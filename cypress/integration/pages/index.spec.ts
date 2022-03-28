describe('HomePage', () => {
  it('should have "Welcome to Next.js!" text', () => {
    // given
    websiteIsOpened();

    // when

    // then
    cy.get('.Home_title__T09hD').contains('Welcome to Next.js!');
  });
});

// ================================================================

function websiteIsOpened() {
  cy.visit('http://localhost:3000');
}

export {};
