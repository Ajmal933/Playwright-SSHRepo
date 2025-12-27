exports.LoginPage=class LoginPage {

    constructor(page) {
        this.page = page
        this.userName_TextBox = page.getByPlaceholder("Username")
        this.password_TextBox = page.getByPlaceholder("Password")
        this.login_Button = page.locator('#login-button')

    }



    async login (Username,Password){

        await this.userName_TextBox.fill(Username)
        await this.password_TextBox.fill(Password)
        await this.login_Button.click()
    }

    async NavigationURL(){

        await this.page.goto('https://www.saucedemo.com/')
    }


}