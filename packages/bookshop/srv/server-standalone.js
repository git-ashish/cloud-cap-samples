async function init() {

    const express = require('express');
    const cds = require('@sap/cds');

    const app = express();
    const { PORT=4004 } = process.env

    // CDS Connection

    await cds.connect('db')

    await cds.serve('all')
        .in(app)

    return app.listen(PORT, () => console.log(`express app with CDS listening on port ${PORT}!`))
}

init()