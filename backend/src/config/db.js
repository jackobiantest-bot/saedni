const mongoose = require("mongoose");
const { NODE_ENV, DB_TEST_URL, DB_URL } = process.env;
module.exports = async function connectToDatabase() {

    const DB_CON_URL = NODE_ENV === "dev" ? DB_TEST_URL : DB_URL

    mongoose.connection.on("connected", () => {
        console.log("DB-CON: SUCCESS");
    });
    
    mongoose.connection.on("error", (error) => {
        console.log("DB-CON: INTERNEAL-ERROR");
    });
    
    mongoose.connection.on("disconected", (error) => {
        console.log("DB-CON: DIS-CONECTED");
    });

    try {
        await mongoose.connect(DB_CON_URL, {
            serverSelectionTimeoutMS: 7000
        });
    } catch(error) {
        if(NODE_ENV === "dev") {
            console.log(error);
            mongoose.connection.close();
            process.exit(1);
        } else {
            console.log("DB-CON: ERROR");
            mongoose.connection.close();
            process.exit(1);
        }
    }

}
