describe('template spec', () => {
  it('giriş', () => {
    cy.visit('https://showcase-car.vercel.app/?model=d&year=2015&fuel=electricity');
    cy.title().should("eq", "Car Hub")
    cy.get("h1").contains("Car Catalogue")
    cy.get("hero__title").contains("Find, book, rent a car—quick and super easy!")
    cy.get("customButton").contains("Explore Cars").click()
    cy.get("div.flex-1.pt-36.padding-x > button[type='button'] > span").contains("Explore Cars")
    cy.get("div.flex-1.pt-36.padding-x > button[type='button'] > span").should("have.css", "background-color", "rgba(0, 0, 0, 0)" ).click()
    cy.get("div#discover div.home__cars-wrapper > div:nth-child(1)").trigger("mouseover").find("div#discover div:nth-child(1) > div.relative.flex.w-full.mt-2 > div.car-card__btn-container > button[type='button'] > span")
  
  })
})
