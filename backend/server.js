const express = require("express");
const cors = require("cors");
const path = require("path");

process.env.NODE_ENV = "production";

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.use(express.static(path.resolve(__dirname, "../frontend/public")));

app.get("/api", (req, res) => {
	res.send("Hello, world!");
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} || ${process.env.NODE_ENV}`);
});
