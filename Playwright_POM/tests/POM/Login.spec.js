
const { test, expect } = require('@playwright/test');
import { LoginPage } from '../../Pages/Login'


test('Login', async ({ page }) => {

    const Login = new LoginPage(page)
    await Login.NavigationURL()
    await Login.login('standard_user', 'secret_sauce')
    





})