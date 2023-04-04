const fs = require('fs').promises;
const path = require('path');

const jsonPath = path.resolve(__dirname, '../src/talker.json');

const allJson = async () => {
    try {
        const reading = await fs.readFile(jsonPath);

        return JSON.parse(reading);
    } catch (error) {
        console.error(`Arquivo talker.json não está conseguindo ler: ${error}`);
    }
};

allJson();

module.exports = allJson;