class ContactPage {
    constructor() {
    }
    get contactButton() {
        return "#menu-item-18 > a";
    }
    get contactNameInput() {
        return "#wpforms-161-field_0";
    }
    get contactLastNameInput() {
        return "#wpforms-161-field_0-last";
    }
     get contactEmailInput() {
        return "#wpforms-161-field_1";
    }
    get contactCommentInput() {
        return "#wpforms-161-field_2";
    }
}

const contactPageInstance = (() => {
    let instance;
    return {getInstanceContactPage: () => instance || (instance = new ContactPage())};
})();

module.exports = contactPageInstance;
