import { mount } from '@cypress/react';
import * as faker from 'faker';

import TodoList from '../TodoList';

const { _ } = Cypress;

describe('TodoList', () => {
  it('renders all todo items correctly', () => {
    const todos = _.times(
      faker.datatype.number({ min: 5, max: 10 }),
      (index) => ({
        id: index + 1,
        title: faker.random.word(),
      })
    );

    cy.intercept('GET', `${Cypress.env('apiUrl')}/todos`, todos);
    mount(<TodoList />);

    for (const { title } of todos) {
      cy.findByText(title).should('exist');
    }
  });
});
