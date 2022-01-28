const express = require("express")
const app = express()

app.set("PORT", 4000);
app.use("/".express.static(path.join("frontend")))

const server = app.listen(app.get("PORT"), (err) => {
    console.log("Now listening on ", app.get("PORT"));
})