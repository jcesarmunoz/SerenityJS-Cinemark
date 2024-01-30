import { Task, Wait } from '@serenity-js/core';
import { Click, isClickable } from '@serenity-js/web'

import { HomePage } from '../ui/HomePage';

export class CreateAccountTask {
    static withoutMembership = () =>
        Task.where('actor goes to create account with out membership',
            Wait.until(HomePage.popupRedeban(), isClickable()),
            Click.on(HomePage.popupRedeban()),
            Click.on(HomePage.createAccount()),
            Click.on(HomePage.createAccountWithoutMembership())
        )
}