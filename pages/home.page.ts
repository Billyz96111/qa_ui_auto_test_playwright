import {
  Locator,
  Page as PlaywrightPage,
  type BrowserContext,
} from "@playwright/test";
import { Page as BasePage } from "./page";
export class HomePage extends BasePage {
  constructor(context: BrowserContext) {
    super(context);
    this.pagePath = "/";
  }
  public readonly enterButton: Locator = this.page.getByRole("button", {
    name: "Enter",
  });
  public readonly connetButton: Locator = this.page.locator(
    '//*[@data-test-id="connect"]'
  );
  public readonly metaMaskLink: Locator = this.page.getByText("MetaMask");
  public readonly nextButton: Locator = this.page.locator(
    '[data-test-id="next"]'
  );
  public readonly accpectButton: Locator = this.page.locator(
    '//button[text()="Accept"]'
  );
  public readonly contractUs: Locator = this.page.locator(
    '//u[text()="How to Contact Us."]'
  );
  public readonly claimEigenText: Locator = this.page.locator(
    '//p[text()="Claim EIGEN"]'
  );
  
}
