#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
console.log(`Open http://localhost:${port}/ in your browser to view the site.`);
console.log('Press Ctrl+C to stop the server.');
app.listen(port);
