const express = require('express');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app); // 确保 server 变量被定义

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:MACHINE-IP-ADDRESS:${PORT}`);
});
