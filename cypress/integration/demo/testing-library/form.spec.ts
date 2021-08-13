import * as faker from 'faker';

describe('Post Form', () => {
  it('selects elements correctly', () => {
    const newPost = {
      title: faker.lorem.sentence(),
      category: faker.helpers.randomize(['java', 'python', 'ruby']),
      status: faker.helpers.randomize(['Drafted', 'Published']),
      content: faker.lorem.paragraph(),
    };

    cy.visit('/cypress/post-form');
    cy.findByPlaceholderText('Enter a title').type(newPost.title);
    cy.findByLabelText('Category').select(newPost.category);
    cy.findByRole('radio', { name: newPost.status }).check();
    cy.findByPlaceholderText('Enter a content').type(newPost.content);
    cy.findByRole('button', { name: 'Submit' });
  });
});
