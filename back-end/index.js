const express = require("express")
const app = express()
const port = 5000
const cors = require('cors')
const associationRoute = require("./routes/lesAssociation")
// utilisation de cors pour que mon front est accès au donnée du backend
app.use(cors())

app.use('/associations', associationRoute)


app.listen(port,() => {
    console.log(`serveur started on port : ${port}`);
})