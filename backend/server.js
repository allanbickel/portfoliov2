const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
	res.send("Hello, world!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("Server is running on port $PORT");
});
