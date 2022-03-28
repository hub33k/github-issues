describe('HomePage', () => {
  it('should have "Github Issues" text', () => {
    // given
    websiteIsOpened();

    // when

    // then
    cy.get('h1').contains('Github Issues');
  });
});

// ================================================================

function websiteIsOpened() {
  cy.visit('http://localhost:3000');
}

export {};
