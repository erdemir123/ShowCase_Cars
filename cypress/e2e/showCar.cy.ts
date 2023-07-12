describe('template spec', () => {
  it('giriş', () => {
    cy.visit('https://showcase-car.vercel.app/?model=d&year=2015&fuel=electricity');
    cy.title().should("eq", "Car Hub")
    cy.get("h1").contains("Car Catalogue")
    // cy.get("hero__title").contains("Find, book, rent a car—quick and super easy!")
    // cy.get("customButton").contains("Explore Cars").click()
    cy.get("")
  })
})