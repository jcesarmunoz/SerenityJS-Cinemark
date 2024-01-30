import { By, PageElement } from "@serenity-js/web";



export const PurchasePage = {
    popupPromotion: () => PageElement.located(By.xpath("//button[@class='ant-modal-close']")).describedAs('close popup promotion'),
    selectSeats: (typeSeat: string) => PageElement.located(By.xpath(`(//span[normalize-space()='${typeSeat}']//..//..//*[contains(@class,'ant-select-arrow')])[1]`)),
    selectNumberSeats: (numberSeat: string) => PageElement.located(By.xpath(`//li[normalize-space()='${numberSeat}']`)),
    cartPrice: () => PageElement.located(By.xpath("//div[contains(@class,'shopping-cart__buyer')]")).describedAs("image shopping cart"),
    continue: () => PageElement.located(By.xpath("//button[@title='continuar']")).describedAs("continue button"),
    selectSeatsTheater1: () => PageElement.located(By.xpath("(//button[contains(@class,'seat-item--Empty')])[1]")).describedAs("select first seat in theater button"),
    selectSeatsTheater2: () => PageElement.located(By.xpath("(//button[contains(@class,'seat-item--Empty')])[2]")).describedAs("select second seat in theater button"),
    confirmSeats: () => PageElement.located(By.xpath("//div[@class='ant-modal-body']//button[@title='confirmar']")).describedAs("confirm seats button"),
    buySnacks: () => PageElement.located(By.xpath("(//img[@alt='Add'])[2]")).describedAs("buy snacks button"),
    containerCreditDebitCard: () => PageElement.located(By.xpath("(//div[contains(@class,'panel-payment')])[1]")).describedAs("container to select credit or debit card"),
    cardNumber: () => PageElement.located(By.xpath("//input[@id='payment_creditCard.number']")).describedAs("card number input"),
    cardName: () => PageElement.located(By.xpath("//input[@id='payment_creditCard.name']")).describedAs("card name input"),
    cardExpirationDate: () => PageElement.located(By.xpath("//span[@id='payment_creditCard.expirationDate']")).describedAs("card expiration date"),
    monthExpirationDate: (month: String) => PageElement.located(By.xpath(`//tbody[@class='ant-calendar-month-panel-tbody']//a[text()='${month}.']`)).describedAs(`select monh ${month}`),
    cardSecurityCode: () => PageElement.located(By.xpath("//input[@id='payment_creditCard.securityCode']")).describedAs("card security code input"),
    feeNumber: () => PageElement.located(By.xpath("//div[@id='payment_creditCard.installments']")).describedAs("fee of number list"),
    selectFeeNumber: () => PageElement.located(By.xpath("(//li[contains(@class,'menu-item')])[2]")).describedAs("select fee of number"),
    acceptDataPolicies: () => PageElement.located(By.xpath("//input[@id='payment_agreement']")).describedAs("accept data policies check box"),
    acceptPurchase: () => PageElement.located(By.xpath("//button[@title='ACEPTAR']")).describedAs("accept purchase button"),
    codeQr: () => PageElement.located(By.xpath("//div[contains(@class,'qr')]")).describedAs("code qr"),
    finishPurchase: () => PageElement.located(By.xpath("//button[@title='FINALIZAR']")).describedAs("finish process purchase button")
}