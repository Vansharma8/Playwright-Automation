import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/LoginPage';
import { homePage } from '../pages/HomePage';
import { checkoutPage } from '../pages/CheckoutPage';


test('SauceDemo end-to-end checkout flow', async ({ page }) => {
  
    //Login
    const login = new loginPage(page);

    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce');

    //Home Page
    const home = new homePage(page);
    await expect(home.heading).toBeVisible();
    await home.filterProducts('za');
    await home.addToCart('fleece-jacket');
    await home.addToCart('backpack');
    await home.removeFromCart('fleece-jacket');

    //Checkout Page
    const checkout = new checkoutPage(page);
    await checkout.openCart();
    await checkout.checkout();
    await checkout.fillCheckoutInfo('John', 'Doe', '12345');
    await expect(checkout.totalLabel).toBeVisible();

    console.log(await checkout.getTotalAmount()); //log total amount
    
    await checkout.finishCheckout();
    await expect(checkout.completeHeader).toBeVisible();

});