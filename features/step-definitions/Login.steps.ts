import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { LoginTask } from '../../test/task';

Given('{actor} has an account in cinemark', { timeout: -1 }, async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/'),
        LoginTask.goToLogin()
    )
);

When('{actor} enters the {string} and {string}', { timeout: -1 }, async (actor: Actor, email: string, password: string) =>
    actor.attemptsTo(
        LoginTask.enterCredentials(email, password)
    )
);

Then('{actor} can see her name {string}', { timeout: -1 }, async (actor: Actor, name: string) =>
    actor.attemptsTo(
        LoginTask.validationLogin(name)
    )
);