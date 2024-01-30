import { Given, Then, When } from "@cucumber/cucumber";
import { Actor, actorCalled, actorInTheSpotlight } from "@serenity-js/core";
import { PurchaseTask } from "../../test/task/PurchaseTask";



Given('{actor} and Ana want to see the movie {string} in {string} the {string} at {string}', { timeout: -1 }, async (
    actor: Actor, nameMovie: string, city: string, day: string, schedule: string) =>
    actor.attemptsTo(
        PurchaseTask.selectMovieAndShedule(nameMovie, city, day, schedule)

    )
);

When('They select seats {string}, {string}, snacks and schedule', { timeout: -1 }, async (typeSeats: string, numberSeats: string) =>
    actorInTheSpotlight().attemptsTo(
        PurchaseTask.selectTypeSeats(typeSeats, numberSeats),
        PurchaseTask.selectSeatsTheater(),
        PurchaseTask.selectSnacks()
    )
);

Then('They can make a payment with credit Card {string}, {string}, {string}', { timeout: -1 }, async (numberCard: string, nameCard: string, securityCode: string) =>
    actorInTheSpotlight().attemptsTo(
        PurchaseTask.makesPayment(numberCard, nameCard, securityCode)
    )
);

When('They can see the code Qr and complete the purchase', { timeout: -1 }, async () =>
    actorInTheSpotlight().attemptsTo(
        PurchaseTask.verifyPurchase()
    )
);


