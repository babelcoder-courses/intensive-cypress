const person = {
  firstName: 'Somchai',
  lastName: 'Haha',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  printDetails() {
    console.log(`Name:`, this.getFullName());
  },
};

describe('Spy', () => {
  it('handles spy correctly', () => {
    cy.spy(person, 'getFullName');
    const logSpy = cy.spy(console, 'log');
    const withName = logSpy.withArgs('Name:', 'Somchai Haha');
    person.printDetails();
    expect(person.getFullName).to.be.callCount(1);
    expect(person.getFullName).to.be.calledOnce;
    expect(person.getFullName).not.to.be.calledTwice;
    expect(console.log).to.be.calledWith('Name:').calledOnce;
    expect(console.log).to.be.calledWithExactly('Name:', 'Somchai Haha')
      .calledOnce;
    expect(withName).to.be.calledOnce;
  });
});

export {};
