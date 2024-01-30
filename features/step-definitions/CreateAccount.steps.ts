import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { CreateAccountTask } from '../../test/task/CreateAccountTask';
import { RegisterInformationTask } from '../../test/task/RegisterInformationTask';

Given('{actor} can navigate to cinemark colombia', { timeout: -1 }, async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/'),
        CreateAccountTask.withoutMembership(),
    )
);

When('{actor} complete section personal information with {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',{ timeout: -1 }, async ( 
    actor: Actor, typePerson: string, typeDocument: string, names: string, lastName: string, gender: string, documentNumber: string, birthDate: string, mobileNumber: string, address: string) =>
    actor.attemptsTo(
        RegisterInformationTask.personalInfomation(typePerson, typeDocument, names, lastName, gender, documentNumber, birthDate, mobileNumber, address)
    )
);

When('information about E-mail with {string}, {string}, {string}, {string}',{ timeout: -1 }, async (
    email: string, pass: string,city: string,theatre: string) =>
    actorInTheSpotlight().attemptsTo(
        RegisterInformationTask.emailInformation(email, pass, city, theatre)
    )

);
Then('{actor} sees the text Registro exitoso',{ timeout: -1 }, async(actor: Actor) => 
    actor.attemptsTo(
        RegisterInformationTask.completedRegister()
    )
);