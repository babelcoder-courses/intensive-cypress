import { mount } from '@cypress/react';
import * as faker from 'faker';

import SearchBox from '../SearchBox';

describe('SearchBox', () => {
  it('renders the component correctly', () => {
    const placeholder = faker.random.word();
    const buttonText = faker.random.word();
    const keyword = faker.random.word();
    const onSearch = cy.spy().as('search');

    mount(
      <SearchBox
        placeholder={placeholder}
        buttonText={buttonText}
        onSearch={onSearch}
      />
    );

    cy.findByPlaceholderText(placeholder).type(keyword);
    cy.findByRole('button', { name: buttonText }).click();
    cy.get('@search').should('be.calledOnceWithExactly', keyword);
  });
});
