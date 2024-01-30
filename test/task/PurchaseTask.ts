import { Duration, Task, Wait } from '@serenity-js/core';
import { AccountPage } from './../ui/AccountPage';
import { Click, Enter, Scroll, isClickable, isEnabled, isVisible } from "@serenity-js/web";
import { Ensure, isPresent, isTrue } from '@serenity-js/assertions';
import { PurchasePage } from '../ui/PurchasePage';


export class PurchaseTask {
    static selectMovieAndShedule = (movie: string, city: string, day: string, schedule: string) =>
        Task.where('Select movie and schedule',
            Wait.until(AccountPage.arrowRight(), isClickable()).pollingEvery(Duration.ofSeconds(40)),
            Wait.for(Duration.ofSeconds(1)),
            Click.on(AccountPage.arrowRight()),
            Wait.for(Duration.ofSeconds(1)),
            Click.on(AccountPage.arrowRight()),
            Wait.for(Duration.ofSeconds(1)),
            Click.on(AccountPage.galleryMovie(movie)),
            Wait.until(AccountPage.closeSelectCity(), isPresent()).pollingEvery(Duration.ofSeconds(20)),
            Wait.for(Duration.ofSeconds(4)),
            Click.on(AccountPage.closeSelectCity()),
            Click.on(AccountPage.city()),
            Click.on(AccountPage.selectCity(city)),
            Click.on(AccountPage.selectDay(day)),
            Wait.for(Duration.ofSeconds(2)),
            Wait.until(AccountPage.selectSchedule(schedule), isPresent()).pollingEvery(Duration.ofSeconds(20)),
            Click.on(AccountPage.selectSchedule(schedule)),
            Click.on(AccountPage.confirmDetail())
        )

    static selectTypeSeats = (typeSeats: string, numberSeats: string) =>
        Task.where('Select type and number seats',
            Wait.for(Duration.ofSeconds(10)),
            Click.on(PurchasePage.popupPromotion()),
            Scroll.to(PurchasePage.selectSeats(typeSeats)),
            Click.on(PurchasePage.selectSeats(typeSeats)),
            Click.on(PurchasePage.selectNumberSeats(numberSeats)),
            Ensure.that(PurchasePage.cartPrice(), isPresent()),
            Click.on(PurchasePage.continue())
        )

    static selectSeatsTheater = () =>
        Task.where('Select seats in the theater',
            Click.on(PurchasePage.selectSeatsTheater1()),
            Click.on(PurchasePage.selectSeatsTheater2()),
            Click.on(PurchasePage.continue()),
            Click.on(PurchasePage.confirmSeats())
        )

    static selectSnacks = () =>
        Task.where('Select snacks',
            Wait.for(Duration.ofSeconds(8)),
            Wait.until(PurchasePage.buySnacks(), isEnabled()),
            Click.on(PurchasePage.buySnacks()),
            Click.on(PurchasePage.buySnacks()),
            Click.on(PurchasePage.continue()),
            Click.on(PurchasePage.continue())
        )

    static makesPayment = (numberCard: string, nameCard: string, securityCode: string) =>
        Task.where('makes payment with credit card',
            Wait.for(Duration.ofSeconds(2)),
            Wait.until(PurchasePage.containerCreditDebitCard(), isEnabled()),
            Click.on(PurchasePage.containerCreditDebitCard()),
            Wait.for(Duration.ofSeconds(1)),
            Enter.theValue(numberCard).into(PurchasePage.cardNumber()),
            Enter.theValue(nameCard).into(PurchasePage.cardName()),
            Click.on(PurchasePage.cardExpirationDate()),
            Click.on(PurchasePage.monthExpirationDate("sep")),
            Enter.theValue(securityCode).into(PurchasePage.cardSecurityCode()),
            Click.on(PurchasePage.feeNumber()),
            Click.on(PurchasePage.selectFeeNumber()),
            Wait.for(Duration.ofSeconds(2)),
            Click.on(PurchasePage.acceptDataPolicies()),
            Click.on(PurchasePage.continue()),
            Click.on(PurchasePage.acceptPurchase())
        )

    static verifyPurchase = () =>
        Task.where('verify purchase and qr',
            Wait.for(Duration.ofSeconds(90)),
            Ensure.that(PurchasePage.codeQr(), isPresent()),
            Scroll.to(PurchasePage.finishPurchase()),
            Click.on(PurchasePage.finishPurchase()),
            Wait.until(AccountPage.circleAvatar(), isEnabled()),
        )
}