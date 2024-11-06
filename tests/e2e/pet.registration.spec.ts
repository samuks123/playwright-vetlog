import { test, expect } from "@playwright/test"
import { Authenticator } from "../utils/authenticator"
import { HomePage } from "../pages/home.page"
import data from "../properties/data.json"

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/vetlog-spring-boot/wiki/US1",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should registrer a pet", async ({ page }) => {
  let authenticator = new Authenticator(page)
  let homePage = new HomePage(page)
  authenticator.login(`${process.env.VETLOG_USERNAME}`, `${process.env.VETLOG_PASSWORD}`)
  await homePage.clickOnRegisterPet()
  await expect(page).toHaveTitle(data.petCreateTitle)
})
