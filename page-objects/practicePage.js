class PracticePage {
    constructor() {
    }

    get practiceMenuButton() {
        return "#menu-item-20 > a";
    }

    get loginTestLink() {
        return "#loop-container > div > article > div.post-content > div.wp-block-columns.is-layout-flex.wp-container-core-columns-is-layout-1.wp-block-columns-is-layout-flex > div:nth-child(1) > p > a";
    }

    get testExceptionLink() {
        return "#loop-container > div > article > div.post-content > div.wp-block-columns.is-layout-flex.wp-container-core-columns-is-layout-2.wp-block-columns-is-layout-flex > div:nth-child(1) > p > a"
    }
}

const practicePageInstance = (() => {
    let instance;
    return {getInstancePracticePage: () => instance || (instance = new PracticePage())};
})();

module.exports = practicePageInstance;
