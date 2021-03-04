export class Helper{
    public waitMethod(): Promise<number>{
        const promise = new Cypress.Promise<number>(resolve =>{
            const date = new Date();
            date.setSeconds(date.getSeconds() + 3)
            cy.waitUntil(() => new Date().getSeconds() === date.getSeconds());
            resolve(date.getSeconds());
        });

        return promise;
    }
}