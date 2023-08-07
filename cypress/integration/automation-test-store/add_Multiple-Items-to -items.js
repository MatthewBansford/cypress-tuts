import AutoStore_Homepage from "../../support/Page_Objects/automation_objects/AutoStore_Homepage";
import addProductToBasket from "../../support/Page_Objects/automation_objects/Add_Product_to_basket_PO";

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  const autostoreHP = new AutoStore_Homepage();
  const addproduct = new addProductToBasket();

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    autostoreHP.autostorehomepage();
    autostoreHP.clickHairCare();
  });
  it("Add specific items to basket", () => {
      addproduct.addtobasket();
  });
});