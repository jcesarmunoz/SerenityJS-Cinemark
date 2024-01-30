import { By, PageElement } from "@serenity-js/web";

export const AccountPage = {
    nameAvatar: () => PageElement.located(By.xpath("//span[contains(@class,'ant-dropdown-link')]//span")).describedAs('text name avatar'),
    circleAvatar: () => PageElement.located(By.xpath("//span[@class='ant-avatar ant-avatar-circle']")).describedAs('box avatar login'),
    galleryMovie: (movie: string) => PageElement.located(By.xpath(`//div[contains(@class,'container-billboard')]//h3[normalize-space() ="${movie}"]//..//..//..//*[text()='ver horarios']`)).describedAs(`select movie  ${movie}`),
    arrowRight: () => PageElement.located(By.xpath("//button[contains(@class,'arrow__right')]")).describedAs('arrow right button'),
    city: () => PageElement.located(By.xpath("//div[contains(@class,'container-select-city')]")).describedAs("city list"),
    selectCity: (city: string) => PageElement.located(By.xpath(`//li[normalize-space() = '${city}' ]`)).describedAs(`select city ${city}`),
    selectDay: (day: string) => PageElement.located(By.xpath(`//div[contains(@class,'week__day')]//span[normalize-space() = '${day}.']`)).describedAs(`select day ${day}`),
    selectSchedule: (schedule: string) => PageElement.located(By.xpath(`//*[contains(@class,'theaters-detail__container')]//div[normalize-space() ='${schedule}']`)).describedAs(`select schedule ${schedule}`),
    confirmDetail: () => PageElement.located(By.xpath("//button[@title='CONFIRMAR']")).describedAs("confirm button"),
    closeSelectCity: () => PageElement.located(By.xpath("//div[contains(@class,'viewed')]//i[contains(@aria-label,'icon: close')]//*[name()='svg']")).describedAs("close popup select city button"),
    closeSession: () => PageElement.located(By.xpath("(//li[@role='menuitem'])[2]")).describedAs("close session"),
}