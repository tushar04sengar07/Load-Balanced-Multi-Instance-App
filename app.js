const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint (Required for AWS Load Balancer)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Main endpoint
app.get('/', (req, res) => {
    res.send(`Hello from Instance: ${os.hostname()}!`);
});

// Only listen if this file is run directly (allows testing)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;