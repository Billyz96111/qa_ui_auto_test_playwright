import { Page } from "@playwright/test";
import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";
import { HomePage } from "../pages/home.page";

let homePage: HomePage;

test.describe.configure({ mode: "serial" });

test.beforeAll(async ({ context }) => {
  homePage = new HomePage(context);
  context.addCookies([
    {
      name: "preview",
      value: "CliqueInternalOnly",
      domain: ".clique.tech",
      path: "/",
    },
  ]);
  await homePage.go();
  await homePage.page.bringToFront();
});

test("demo test", async () => {
  await homePage.enterButton.click();
  await homePage.connetButton.click();
  await homePage.metaMaskLink.click();
  await metamask.acceptAccess();
  await homePage.nextButton.isVisible();
  if (await homePage.accpectButton.isVisible()) {
    await homePage.contractUs.scrollIntoViewIfNeeded();
    await homePage.accpectButton.click();
    await metamask.confirmSignatureRequest();
  }
  await homePage.nextButton.click();
  await expect(homePage.claimEigenText).toBeVisible();
  await metamask.allowToAddAndSwitchNetwork()
  await homePage.delay(5 * 1000);
});
