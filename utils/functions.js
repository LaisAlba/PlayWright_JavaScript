class Functions {
    constructor() {
    }

    async setLog(message) {
      console.log(message);
    }

    async getTexts(elementSelector, page) {
        const element = await page.$(elementSelector);
        return await element.textContent();
    }

    async SmartField(page, nameField, element, value) {
        const tagName = await page.$eval(element, (element) => element.tagName);
        switch (tagName) {
            case 'INPUT':
            case 'TEXTAREA':
                await page.fill(element, value);
                await this.setLog("no campo: " + nameField + " foi preenchido com valor: " + value);
                break;
            case 'SELECT':
                await page.selectOption(element, value);
                await this.setLog("no campo: " + nameField + " foi selecionado com valor: " + value);
                break;
            case 'BUTTON':
            case 'A':
                console.log(`Clicking element: ${tagName}`);
                try {
                    await page.waitForSelector(element, {visible: true, enabled: true});
                    await page.click(element);
                    await this.setLog("no campo: " + nameField + " foi clicado");
                } catch (error) {
                    console.error(`Error clicking element: ${error}`);
                }
                break;
            default:
                throw new Error(`Tipo de elemento não mapeado no método SmartField: ${tagName}`);
        }
    }

    async forceWait(secondsTime) {
        await page.waitForTimeout(secondsTime)
    }
}

const functionsInstance = new Functions();
module.exports = functionsInstance;