const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define your routes and middleware here

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
