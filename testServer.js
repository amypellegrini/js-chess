const express = require("express");
const app = express();

app.use(express.static("src"));

app.listen(3000, () => console.log(`App listening on port 3000`));
