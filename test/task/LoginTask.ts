import { Check, Duration, Task, Wait } from "@serenity-js/core";
import { HomePage } from "../ui/HomePage";
import { Click, Enter, Text, isClickable, isEnabled, isVisible } from "@serenity-js/web";
import { AccountPage } from "../ui/AccountPage";
import { isDisplayed } from "webdriverio/build/commands/element";
import { Ensure, includes, isPresent } from "@serenity-js/assertions";


export class LoginTask {

    static goToLogin = () =>
        Task.where('actor goes to create account with out membership',
            Wait.until(HomePage.login(), isPresent()).pollingEvery(Duration.ofSeconds(30)),
            Wait.for(Duration.ofSeconds(2)),
            Click.on(HomePage.login()),
        )

    static enterCredentials = (user: string, password: string) =>
        Task.where('actor enters credential to login',
            Wait.until(HomePage.loginButton(), isClickable()).pollingEvery(Duration.ofSeconds(3)),
            Enter.theValue(user).into(HomePage.email()),
            Enter.theValue(password).into(HomePage.password()),
            Click.on(HomePage.loginButton())
        )

    static validationLogin = (name: string) =>
        Task.where('actor makes a correct login',
            Wait.for(Duration.ofSeconds(3)),
            Wait.until(AccountPage.circleAvatar, isPresent()).pollingEvery(Duration.ofSeconds(3)),
            Ensure.that(Text.of(AccountPage.nameAvatar()), includes(name)),
        )
}