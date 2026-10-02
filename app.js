const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Use the SERVER_NAME environment variable, default to "Server 1"
const serverName = process.env.SERVER_NAME || 'Server 1';

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', server: serverName });
});

app.get('/', (req, res) => {
    res.send(`Hello from ${serverName}!`);
});

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`${serverName} is running on port ${PORT}`);
    });
}

module.exports = app;