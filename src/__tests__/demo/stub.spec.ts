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

describe('Stub', () => {
  it('handles stub correctly', () => {
    cy.stub(person, 'getFullName').returns('Somsree');
    const logSpy = cy.spy(console, 'log');
    const withName = logSpy.withArgs('Name:', 'Somsree');
    person.printDetails();
    expect(person.getFullName).to.be.callCount(1);
    expect(person.getFullName).to.be.calledOnce;
    expect(person.getFullName).not.to.be.calledTwice;
    expect(console.log).to.be.calledWith('Name:').calledOnce;
    expect(console.log).to.be.calledWithExactly('Name:', 'Somsree').calledOnce;
    expect(withName).to.be.calledOnce;
  });
});

export {};
