exports.checkoutPage = class CheckoutPage {

    constructor(page){
        this.page = page;

        this.cart = page.locator('[data-test="shopping-cart-link"]')
        this.checkoutButton = page.locator('[data-test="checkout"]')
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName = page.locator('[data-test="lastName"]')
        this.postalCode = page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')
        this.totalLabel = page.locator('[data-test="total-label"]')
        this.finishButton = page.locator('[data-test="finish"]')
        this.completeHeader = page.locator('[data-test="complete-header"]')
    }

    async openCart() {
      await this.cart.click();
    }

    async checkout(){
      await this.checkoutButton.click();
    }

    async fillCheckoutInfo(firstName, lastName, postalCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async getTotalAmount(){
        const totalText = await this.totalLabel.textContent();
        return totalText;
    }

    async finishCheckout(){
       await this.finishButton.click();
    }

}
