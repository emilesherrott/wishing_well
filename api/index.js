// Import http capability into app
const dotenv = require("dotenv")
dotenv.config()

const app = require("./app");

// Start the server listening
app.listen(3000, () => {console.log("Server ready")})