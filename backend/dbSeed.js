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
    ];

    await EmergencyType.deleteMany();
    const insertedTypes = await EmergencyType.insertMany(emergencyTypes);
    console.log(`Emergency Types Inserted: ${insertedTypes.length}`);

    return insertedTypes;
}

async function seedAuthorities(types) {
    await Authority.deleteMany();

    const authorities = types.map((emergencyType) => ({
        type: emergencyType._id,
        name: `${emergencyType.type} Authority`,
        phoneNumbers: ["+249900000001", "+249900000002"],
        whatsappNumber: "+249900000003",
        region: "Khartoum",
        address: "123 SOBA, Khartoum"
    }));

    const insertedAuthorities = await Authority.insertMany(authorities);
    console.log(`Authorities Inserted: ${insertedAuthorities.length}`);
}

async function run() {
    try {
        await connect();
        const types = await seedTypes();
        await seedAuthorities(types);
    } catch (error) {
        console.error("Seeding failed:", error);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

run();