const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./config/db");
const app = require("./app");

const { HOST, PORT } = process.env;

async function startServer() {
    
    await connectToDatabase();

    app.listen(PORT, HOST, () => {
        console.log(`App is running on ${HOST}:${PORT}`);
    });
}

startServer();