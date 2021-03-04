/// <reference types="cypress" />

import { Helper } from "../helper/Helper"

const helper = new Helper();

describe('Test', () => {
  it('Fails after 70 seconds', () => {
    cy.waitUntil(() => helper.waitMethod().then(h => h >= new Date().getSeconds() + 20));
  });
})
