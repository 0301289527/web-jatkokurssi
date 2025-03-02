const express = require("express");
const path = require("path");

const app = express();

// Palvellaan staattisia tiedostoja
app.use(express.static(path.join(__dirname)));

const PORT = 3000;
server.listen(PORT, () => {
      console.log(`Server is running on http://localhost: ${PORT}`);
      });