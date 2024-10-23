class HomePage {
    constructor() {
    }
    get homeMenuButton() {
        return "#menu-item-43 > a";
    }
    get nameNewsLetterInput() {
        return "#form_first_name_7";
    }
    get emailNewsLetterInput() {
        return "#form_email_7";
    }
    get submitNewsLetterButton() {
        return "#mp_form_below_posts7 > form > div.mailpoet_paragraph > input";
    }
}

const homePageInstance = (() => {
    let instance;
    return {getInstanceHomePage: () => instance || (instance = new HomePage())};
})();

module.exports = homePageInstance;
