import { Ensure, equals, includes } from '@serenity-js/assertions';
import { Duration, Task, Wait } from '@serenity-js/core';
import { Click, Enter, isClickable, isEnabled, Key, Press, Switch, Text } from '@serenity-js/web'

import { RegisterPage } from '../ui/RegisterPage'
import { AccountPage } from '../ui';

export class RegisterInformationTask {

    private static setBirthDate = (birthDate: string) =>
        Task.where('Config birth date pickcalendar',
            Click.on(RegisterPage.birthDate()),
            Press.the(Key.Control, Key.Shift, Key.ArrowUp, Key.Backspace),
            Press.the(birthDate),
            Press.the(Key.Enter),
        )

    static personalInfomation = (typePerson: string, typeDocument: string, names: string, lastName: string, gender: string, documentNumber: string, birthDate: string, mobileNumber: string, address: string) =>
        Task.where('Complete personal information in register',
            Wait.until(RegisterPage.createAccount(), isClickable()).pollingEvery(Duration.ofSeconds(40)),
            Click.on(RegisterPage.typePerson()),
            Click.on(RegisterPage.genericListRegister(typePerson)),
            Click.on(RegisterPage.typeDocument()),
            Click.on(RegisterPage.genericListRegister(typeDocument)),
            Enter.theValue(names).into(RegisterPage.names()),
            Enter.theValue(lastName).into(RegisterPage.lastName()),
            Click.on(RegisterPage.gender()),
            Click.on(RegisterPage.genericListRegister(gender)),
            Enter.theValue(documentNumber).into(RegisterPage.documentNumber()),
            RegisterInformationTask.setBirthDate(birthDate),
            Enter.theValue(mobileNumber).into(RegisterPage.mobileNumber()),
            Enter.theValue(address).into(RegisterPage.address()),
        )

    static emailInformation = (email: string, pass: string, city: string, theatre: string) =>
        Task.where('Complete email information in register',
            Wait.until(RegisterPage.city(), isClickable()).pollingEvery(Duration.ofSeconds(4)),
            Enter.theValue(email).into(RegisterPage.email()),
            Enter.theValue(email).into(RegisterPage.confirmEmail()),
            Enter.theValue(pass).into(RegisterPage.password()),
            Enter.theValue(pass).into(RegisterPage.confirmPassword()),
            Click.on(RegisterPage.city()),
            Click.on(RegisterPage.genericListRegister(city)),
            Click.on(RegisterPage.theater()),
            Click.on(RegisterPage.genericListRegister(theatre)),
            Click.on(RegisterPage.acceptTerms()),
            Click.on(RegisterPage.createAccount())
        )

    static completedRegister = () =>
        Task.where('Verification completed Register',
            Wait.for(Duration.ofSeconds(5)),
            Ensure.that(Text.of(RegisterPage.notificacionCompletedRegistration()), includes('REGISTRO EXITOSO')),
            Click.on(RegisterPage.continueFinishedRegister()),
            Wait.for(Duration.ofSeconds(10)),
            Click.on(AccountPage.nameAvatar()),
            Click.on(AccountPage.closeSession())
        )
}