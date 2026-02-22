exports.homePage = class HomePage{

    constructor(page) {
        this.page = page;

        //static locators
        this.heading = page.getByText('Swag Labs')
        this.filter = page.locator('[data-test="product-sort-container"]')
    }

    //dynamic locators

    cartButtn(productName){
      return this.page.locator (`[data-test="add-to-cart-sauce-labs-${productName}"]`);
    }

    removeButtn(productName){
      return this.page.locator(`[data-test="remove-sauce-labs-${productName}"]`);
    }

    // Actions
    async filterProducts(optionValue) {
    await this.filter.selectOption(optionValue);
    }

    async addToCart(productName) {
      await this.cartButtn(productName).click();
    }

    async removeFromCart(productName) {
      await this.removeButtn(productName).click();
    }

}
