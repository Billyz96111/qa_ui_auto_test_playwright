import { Page as PlaywrightPage, type BrowserContext } from "@playwright/test";
import { config } from "dotenv";
config();

export class Page {
  readonly page: PlaywrightPage;
  readonly baseURL: string;
  protected pagePath: string;
  constructor(context: BrowserContext) {
    this.page = context.pages()[0];
    this.baseURL = process.env.BASEURL;
  }

  async goHomePage() {
    await this.page.goto(this.baseURL);
  }

  async go() {
    if (!this.pagePath) {
      await this.goHomePage();
    } else {
      await this.page.goto(this.baseURL + this.pagePath, {
        timeout: 10 * 1000,
      });
    }
  }

  async delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }
}
