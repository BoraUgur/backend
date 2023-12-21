var mongoose = require("mongoose");

/* Local */
const dbURI = "mongodb://localhost:27017/mekanbul";

/* Remote */
// const dbURI = 'mongodb+srv://boraugur47:pJ2WmF1A1zr7Wyuf@mekanbul.fdcluux.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURI)

mongoose.connection.on("connected", () => {
    console.log(`Mongoose ${dbURI} adresindeki veritabanına bağlandı`)
})

mongoose.connection.on("error", () => {
    console.log(`Mongoose bağlantı hatası ${dbURI}`)
})

mongoose.connection.on("disconnected", () => {
    console.log(`Mongoose bağlantısı kesildi`)
})

process.on("SIGINT", () => {
    mongoose.connection.close()
    console.log("Mongoose kapatıldı (SIGINT)")
    process.exit(0)
})