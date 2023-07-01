const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;


// serve static files from // the directory needs to be hashed out still.....
//app.use(express.static("./src"));
app.use(express.static(path.join(__dirname, "/static/js/main.index.js")));

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);