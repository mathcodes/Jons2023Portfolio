const express = require('express');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Load data from JSON file into memory
const dataFilePath = path.join(__dirname, 'src', 'api', 'data.json');
let dataRaw;
try {
    dataRaw = fs.readFileSync(dataFilePath, 'utf-8');
    console.log(dataRaw);
    let lineBreaks = dataRaw.replace(/><>/g, '>\n<');
    console.log(lineBreaks);
    // split lines where >< are found
    let splitLines = lineBreaks.split('><');
    console.log(splitLines);
    data = splitLines.filter(line => line.startsWith('  ')).length;
    console.log(data);
} catch (err) {
    console.error(`Error reading data from file ${dataFilePath}.`, err);
    process.exit(1);
}

app.prepare()
.then(() => {
    const server = express();

    // API endpoint to get data
    server.get('/api/data', (req, res) => {
        res.json(data);
    });

    // API endpoint to update data
    server.post('/api/data', express.json(), (req, res) => {
        // Update data in memory
        data = req.body;

        // Write updated data back to file
        fs.writeFileSync(dataFilePath, JSON.stringify(data), 'utf-8');

        res.status(200).end();
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3001');
    });
})
.catch(err => {
    console.log('Error:', err);
    process.exit(1);
});
