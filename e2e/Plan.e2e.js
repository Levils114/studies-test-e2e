describe('My first suite tests E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  /* beforeEach(async () => {
    await device.reloadReactNative();
  }); */

  /* it('should have info about cancel subscription', async () => {
    const info = await element(by.text('Cancel anytime. Ofter terms apply.'));

    await expect(info).toBeVisible();
  }); */

  it('should subscribe in premium plan', async() => {
    const premiumOption = await element(by.id('option-premium'));
    const input = await element(by.id('input-email'));
    const screen = await element(by.id('keyboard'));
    const subscribeButton = await element(by.id('button-subscribe'));
    const successText = await element(by.id('plan-note'));

    await premiumOption.tap();
    await input.tap();
    await input.typeText('levils114@gmail.com');
    await screen.tap();
    await subscribeButton.tap();

    await device.takeScreenshot('success_premium_plan_subscribe');

    await expect(successText).toBeVisible();
  })
});
