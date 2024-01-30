import { By, PageElement } from '@serenity-js/web';

export const HomePage = {
    popupRedeban: () => PageElement.located(By.xpath("//button[@class='ant-modal-close']")).describedAs('close popup redeban'),
    createAccount: () => PageElement.located(By.xpath('(//button[@title="CREAR CUENTA"])[1]')).describedAs('create account button'),
    createAccountWithoutMembership: () => PageElement.located(By.xpath('(//button[@class="ant-btn"])[1]')).describedAs('create account with out membership button'),
    login: () => PageElement.located(By.xpath('(//button[@title="INICIAR SESIÓN"])[1]')).describedAs('login button'),
    email: () => PageElement.located(By.id('MemberEmail')).describedAs('input email'),
    password: () => PageElement.located(By.id('MemberPassword')).describedAs('input password'),
    loginButton: () => PageElement.located(By.xpath('(//button[@title="Ingresar"])[1]')).describedAs('input password'),
}