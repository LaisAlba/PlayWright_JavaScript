const yaml = require('js-yaml');
const fs = require('fs');

class Config {
    static loadConfig() {
        const data = fs.readFileSync('setup/ambient/ambient.yaml', 'utf8');
        return yaml.load(data);
    }

    static get config() {
        return Config.loadConfig();
    }
}

module.exports = Config;