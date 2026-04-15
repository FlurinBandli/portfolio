import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("/login");
  await page.fill('input[name="name"]', process.env.ADMIN_USERNAME || "");
  await page.fill('input[name="password"]', process.env.ADMIN_PASSWORD || "");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("/admin");

  await page.context().storageState({ path: authFile });
});
