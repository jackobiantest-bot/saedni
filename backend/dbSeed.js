const mongoose = require("mongoose");
const EmergencyType = require("./src/models/emergencyTypeModel");
const Authority = require("./src/models/Authority");

async function connect() {
    await mongoose.connect("mongodb://127.0.0.1:27017/saedni");
}

async function seedTypes() {
    const emergencyTypes = [
        { type: "HEALTH" },
        { type: "FIRE" },
        { type: "SECURITY" },
        { type: "OTHER" }
    ]
    try { 
        await EmergencyType.deleteMany();
        const insertedTypes = await EmergencyType.insertMany(emergencyTypes);
        console.log(`Emergency Types Inserted:  ${await EmergencyType.countDocuments()}`);
        await seedAuthorities();
    } catch(error) {
        console.log(error);
    }
}

async function seedAuthorities() {
    try {
        await Authority.deleteMany();
        const types = await EmergencyType.find();
        types.map(async (eType, index) => {
            await Authority.create({
                type: eType._id,
                name: `${ eType._id.toString().substring(eType._id.length, 4) } Authority`,
                phoneNumbers: [ `${parseInt(Math.random().toString(9)) * 1000000}`, `${parseInt(Math.random().toString(9)) * 1000000}` ],
                whatsappNumber: "+2490489347",
                region: "Khartoum",
                address: "123 SOBA, Khartoum"
            });
        });
    } catch(error) {
        console.log(error);
    }
}

async function run() {
    await connect();
    await seedTypes();
    await seedAuthorities();
    process.exit(1);
}

run();